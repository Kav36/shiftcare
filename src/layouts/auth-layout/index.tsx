import { PropsWithChildren } from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Image from 'components/base/Image';
import LogoImg from 'assets/images/Logo.png';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      component="main"
      alignItems="center"
      justifyContent="center"
      px={1}
      py={7}
      width={1}
      minHeight="100vh"
      position="relative"
    >
      <ButtonBase
        component={Link}
        href="/"
        disableRipple
        sx={{ position: 'absolute', top: 24, left: 24 }}
      >
        <Image src={LogoImg} alt="logo" height={40} width={200} sx={{ mr: 1 }} />
      </ButtonBase>
      <Paper sx={{ px: 2, py: 3, width: 1, maxWidth: 380 }}>{children}</Paper>
    </Stack>
  );
};

export default AuthLayout;
