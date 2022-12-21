
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();


const supabaseUrl = 'https://fapguzpmqyvfplyndcuo.supabase.co';
const serviceKey = process.env.SERVICE_KEY ?? "";
const publicKey = process.env.PUBLIC_KEY ?? "";
if (!serviceKey)
    throw new Error("No SERVICE_KEY is defined in the .env file");
if (!publicKey)
    throw new Error("No PUBLIC_KEY is defnied in the .env file");
export const serviceClient = createClient(supabaseUrl, serviceKey);
export const publicClient = createClient(supabaseUrl, publicKey);