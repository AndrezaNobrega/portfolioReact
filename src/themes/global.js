import { createGlobalStyle, GlobalStyleComponent } from "styled-components";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:wght@400;500;600&display=swap');
</style>


const Global = createGlobalStyle `
body {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:wght@400;500;600&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;

    padding: 0;
    margin: 0;
    
}
`
export default Global