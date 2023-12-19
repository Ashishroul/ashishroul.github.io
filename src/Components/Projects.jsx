import { Box, Heading, Image, Stack } from "@chakra-ui/react"
import AutoPart from "../Project Component/AutoPart";
import Yourpharma from "../Project Component/Yourpharma";
import HandSanitizer from "../Project Component/HandSanitizer";
import { useSelector } from "react-redux";



const Projects = () => {
    const theme = useSelector(store => store.theme);
    return <Box w={"100%"} backgroundColor={theme === "dark" ? "black" : "white"} color={theme === "dark" ? "white" : "black"} id="projects" >
        <Box w={"90%"} borderBottom={"1px"} borderBottomColor={theme === "dark" ? "white" : "black"} pb={"1rem"} m={"auto"} >
            <Box w={"100%"} m={"auto"} pt={"1rem"} >
                <Heading textAlign={"center"} color={"#4A90E2"} textDecoration={"underline"} textDecorationColor={"#4A90E2"}>Projects</Heading>
               
                <HandSanitizer />
               
                <Yourpharma />
                <AutoPart />
              
            </Box>
            <Box border={"1px"} w={"100%"} m={"auto"} borderRadius={"10"} p={"0.5rem"} >
                <Heading textAlign={"center"} color={"#4A90E2"} >Github Stats</Heading>
                <Box w={"70%"} m={"auto"}>
                    {theme === "dark" ? <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=paraskamaliya&layout=donut&langs_count=8&theme=dark" alt="GitHub stats" m={"auto"} /> : <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=paraskamaliya&layout=donut&langs_count=8&theme=white" alt="GitHub stats" m={"auto"} />}
                </Box>
                <Stack direction={["column", "column", "column", "column", "row"]} w={"70%"} m={"auto"} mt={"5px"} justifyContent={"center"}>
                    <Image id="github-stats-card" src="https://camo.githubusercontent.com/9719bc49f399ee3217ebfbe111171300250b0626e28f85b9294a9a557927d7c0/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d617368697368726f756c2673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="GitHub stats" />
                    <Image id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=paraskamaliya&theme=transparent" alt="GitHub Streak" style={{ maxWidth: "100%" }} />
                </Stack>
                <Box w={"80%"} m={"auto"} className="react-activity-calendar">
                    <Image src="https://ghchart.rshah.org/006AFF/paraskamaliya" alt="Github Contribution" m={"auto"} />
                </Box>
            </Box>
        </Box>
    </Box >
}
export default Projects;