-- Add UPDATE and DELETE policies for contacts table
-- Allow admins to update contacts (e.g., status)
CREATE POLICY "Admins can update contacts."
  ON public.contacts FOR UPDATE
  USING ( public.is_admin() );

-- Allow admins to delete contacts
CREATE POLICY "Admins can delete contacts."
  ON public.contacts FOR DELETE
  USING ( public.is_admin() );
