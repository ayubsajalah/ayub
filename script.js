
function tekan() { 

    var Nim                 = (document.Form.NimInput.value);
    var Nama                = (document.Form.NamaInput.value); 
    var JenisKelamin        = (document.Form.JemiskelaminInput.value); 
    var Agama               = (document.Form.AgamaInput.value); 
    var Jurusan             = (document.Form.JurusanInput.value); 
    var Komentar            = (document.Form.KomentarInput.value); 

    var staus ='';
if (document.Form.KawinInput.checked==true){staus = 'kawin';}
else{staus = 'belum kawin';}

   
document.Form.NimOutput.value               = Nim; 
    document.Form.NamaOutput.value              = Nama; 
    document.Form.JemiskelaminOutput.value      = JenisKelamin; 
    document.Form.AgamaOutput.value             = Agama; 
    document.Form.StatusOutput.value            = staus; 
    document.Form.JurusanOutput.value           = Jurusan; 
    document.Form.KomentarOutput.value          = Komentar; 

}