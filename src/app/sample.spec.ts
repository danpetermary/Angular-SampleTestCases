import { Note } from "./note";

fdescribe("Wednesday",
()=>
{
    it("my first case",
    ()=>
    {
        console.log("First test passed");
    }
    )
    it("my second case",
    ()=>
    {
        console.log("second test passed");
    }
    )
   it("note title failed",
   ()=>
   {
       let samplenote=new Note();
       let resultnote=new Note();
      samplenote.text="Mary";
      resultnote.text="My";
      expect(samplenote).toEqual(resultnote);
   })


}
)