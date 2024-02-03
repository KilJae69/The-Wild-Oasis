import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dmuilaujgnvztvzpxenf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtdWlsYXVqZ252enR2enB4ZW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMTA0NzYsImV4cCI6MjAyMTU4NjQ3Nn0.ag9GmafLPygYjfAt1n5EBST09CDuOLz7HjXFDIRio7I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
