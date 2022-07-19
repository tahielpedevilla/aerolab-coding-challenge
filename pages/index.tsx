import { Container } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Head from "next/head"

const Landing: React.FC = () => {
	return (
		<Container h="full" w="full" maxW="container.lg">
			<Head>
				<title>Aerolab Commerce - Challenge</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Navbar />
		</Container>
	)
}

export default Landing
