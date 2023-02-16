
import { HeaderNavStyles, LogoStyles } from './header-nav.styles'
// import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import CustomButton from '../custom-button/custom-button.component'


const HeaderNav = ({onClick}) => {
    
    return (
        <HeaderNavStyles >
            <Toolbar>
                <LogoStyles variant='h4' >Task / Master</LogoStyles>
                <CustomButton type='button' label='Sign Out' onClick={onClick} />
            </Toolbar>
        </HeaderNavStyles>
    )
}

export default HeaderNav;