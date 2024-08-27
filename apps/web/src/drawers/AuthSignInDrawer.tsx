import { AuthSignInForm } from '@/forms';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { authSignInDrawerAtom } from 'atoms';
import { useAtom } from 'jotai';

export function AuthSignInDrawer() {
  const [dialog, setDialog] = useAtom(authSignInDrawerAtom);

  function onClose() {
    setDialog({
      open: false,
    });
  }
  return (
    <Dialog open={dialog.open} onClose={onClose}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <AuthSignInForm />
      </DialogContent>
    </Dialog>
  );
}
