let speech= new SpeechSynthesisUtterance()
let listen=document.getElementById('listen')
listen.addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})
let voices=[]
let select=document.getElementById("select")
window.speechSynthesis.onvoiceschanged=()=>{
  voices=window.speechSynthesis.getVoices()
  speech.voice=voices[0]
  voices.forEach((voice,i)=>(select.options[i])=new Option(voice.name,i))
}
select.addEventListener("change",()=>{
    speech.voice=voices[select.value]
})