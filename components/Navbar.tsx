import { HStack } from "@chakra-ui/react"
import Logo from "./Logo"

const Navbar: React.FC = () => (
	<HStack justify="space-between" align="center" h={128}>
		<Logo />
	</HStack>
)

export default Navbar
