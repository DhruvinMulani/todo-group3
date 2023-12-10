import {render,screen} from '@testing-library/react-native'
import RowComponent from "../components/RowComponent.js"



describe("Testing the Custom Row Component", () => {
    it("Task with isComplete == false should show PENDING and switch OFF", async ()=> {
        render(<RowComponent item={{ id: 9, name: "make a grocery", isComplete: false }}/>)
        
        const textInput = await screen.findByTestId("myText")
   
        const switchInput = await screen.findByTestId("mySwitch")
    
        
        expect(textInput).toHaveTextContent("PENDING")
        expect(switchInput.props.value).toBe(false)
      
    })

    it("Task with isComplete == true should show FINISHED and switch ON", async ()=> {
        render(<RowComponent item={{ id: 9, name: "make a grocery", isComplete: true }}/>)
        
        const textInput = await screen.findByTestId("myText")
    
        const switchInput = await screen.findByTestId("mySwitch")
     
        
        expect(textInput).toHaveTextContent("FINISHED")
        expect(switchInput.props.value).toBe(true)
      
    })
})
