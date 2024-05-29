import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mmhehytxuczxkcfinnly.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1taGVoeXR4dWN6eGtjZmlubmx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3ODA0OTcsImV4cCI6MjAzMTM1NjQ5N30.r02QqjgTy60HXgwV1hGEy_7anZsMm2XmvaJyqrCB3YU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
