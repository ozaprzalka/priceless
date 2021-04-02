import React from 'react';
import { Grommet, Header, Anchor, Box, ResponsiveContext, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import { headerStyle, customFocus } from "../../styles";

export const HeaderComponent = () => (
  <Grommet theme={ customFocus }>
    <Header background="light-4" pad="medium" height="xsmall" style={ headerStyle }>
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
