/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Boy from "../../assets/images/boy.png";
import Girl from "../../assets/images/girl.png";
import { useLoader } from "../../hooks/useLoader";
import { supabase } from "../../supabase/client";
import toast from "react-hot-toast";

export const Rectangle = ({ e, i, getNewRequests, role, startContract }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { setLoading } = useLoader()

    const getProgram = (language) => {
        if (language == 'english') {
            return "Inglés"
        } else if (language == 'french') {
            return "Fránces"
        } else {
            return "Inglés y Francés"
        }
    }

    const getColorStatus = (status) => {
        if (status == 'inactive') {
            return "#780001"
        } else if (status == 'pending') {
            return "#ffae1e"
        } else {
            return "green"
        }
    }

    const getStatusRender = (status) => {
        if (status == 'inactive') {
            return "Inactivo"
        } else if (status == 'pending') {
            return "Pendiente"
        } else {
            return "Activo"
        }
    }

    const updatePendingStatus = async (student_id, payload) => {
        console.log(student_id);
        try {
            setLoading(true);
            await supabase
                .from('students')
                .update(payload)
                .eq('id', student_id)
                .select('*')
                .then((response) => {
                    console.log(response);
                    setLoading(false)
                    if (response.data.length > 0) {
                        setLoading(false)
                        console.log(response.data);
                        getNewRequests()
                    } else {
                        console.log(response.error);
                        toast.error(response.error)
                        throw response.error
                    }
                })
        } catch (error) {
            setLoading(false)
            toast.error(error)
        }
    }

    return (
        <>
            <div key={i} className="product-block masonry-item small-column all cat-2 product lenses col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image-box">
                        <div className="image" style={{ maxWidth: '60%', margin: '0 auto' }}>
                            <img src={e.gender === 'boy' ? Boy : Girl} alt="Product 1" />
                        </div>
                        {/* <div className="icon-box">
									<button className="ui-btn"><i className="fa fa-heart"></i></button>
									<button className="ui-btn"><i className="fa-solid fa-file-signature"></i></button>
								</div> */}
                    </div>
                    <div className="content d-flex flex-column align-items-center pb-0">
                        <small>
                            <small style={{ color: getColorStatus(e.status) }}>
                                {getStatusRender(e.status)}
                            </small>
                        </small>
                        <h4>{`${e.first_name} ${e.last_name}`}</h4>
                        <span className="price"><b>{getProgram(e.language)}</b></span>
                        <div className='d-flex flex-column mt-4'>
                            <div className='d-flex'>
                                <span className="price" >{e.parent_firstname}</span>&nbsp;
                                <span className="price" >{e.parent_lastname}</span>
                            </div>
                            <span className="price">{e.parent_id}</span>
                        </div>
                        <span className="price" >{e.parent_email}</span>
                    </div>
                    <div className='d-flex justify-content-between gap-2 p-4 flex-column'>
                        {(e.status === 'inactive' && role === 'customer') &&
                            <span className="button_top">
                                Una vez se hábilite la mátricula, podra realizar el
                                trámite desde aquí.
                            </span>
                        }
                        {(e.status === 'pending' && role === 'customer') &&
                            <button className="_button" onClick={() => { startContract() }}>
                                <span className="button_top">Iniciar Mátricula</span>
                            </button>
                        }
                        {(e.status === 'inactive' && !show && role === 'admin') &&
                            <button className="_button" onClick={() => handleShow()}>
                                <span className="button_top"> Enviar a Firmar</span>
                            </button>
                        }
                        {show &&
                            <div className="d-flex gap-4" style={{ margin: '0 auto' }}>
                                <button className="_button" style={{ backgroundColor: 'red' }} onClick={() => handleClose()}>
                                    <span className="button_top"> Cancelar</span>
                                </button>
                                <button className="_button" style={{ backgroundColor: 'green' }} onClick={() => updatePendingStatus(e.id, { status: 'pending' })}>
                                    <span className="button_top"> Confirmar </span>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
