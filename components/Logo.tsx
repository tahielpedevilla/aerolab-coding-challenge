import { Image } from "@chakra-ui/react"

const Logo: React.FC = () => (
	<>
		<Image alt="Logo" src="/aerolab-logo.svg" display={["none", "none", "block", "block"]} />
		<Image alt="Logo" src="/aerolab-logo-mobile.svg" display={["block", "block", "none", "none"]} />
	</>
)

export default Logo
