import React from 'react';
import { Grommet, Header, Anchor, Box, ResponsiveContext, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import { grommet } from 'grommet/themes';

export const HeaderComponent = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="medium" height="xsmall">
      <Anchor
        href="/#"
        
        label="You will never miss any sale with us!"
      />
      <ResponsiveContext.Consumer>
        {size =>
          size === 'small' ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="brand" />}
                items={[
                  {
                    label: <Box pad="small">Login</Box>,
                    href: '/login',
                  },
                  {
                    label: <Box pad="small">Register</Box>,
                    href: '/register',
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor href="/#/login" label="Login" />
              <Anchor
                href="/#/register"
                label="Register"
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Grommet>
);
