import { createClient } from "@supabase/supabase-js";

const REACT_APP_SUPABASE_URL = "https://nnlzmfxtfvwnlihtdtsn.supabase.co";
const REACT_APP_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ubHptZnh0ZnZ3bmxpaHRkdHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzODM1OTIsImV4cCI6MjA4NDk1OTU5Mn0.NPNkgspmXF641wSnqQ2e-TKEwm7a19PlHM46bwsZFFw";

export const supabase = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_ANON_KEY,
  /* process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY, */
);
