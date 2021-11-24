// Declare variable for the uploaded photo's absolute path
var picurl;
console.log('Upload script code happening!')
    // Cloudinary code containing cloud name and preset. This information can 
    // also be stored in the .env file 
    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'dyz1jgp39',
        uploadPreset: 'xg9rbdt3'
    }, (error, result) => {
       // console.log('RESULT', result)
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);

           var pic = document.getElementById('previewPic')
           pic.setAttribute('src', result.info.secure_url)
           picurl =  result.info.secure_url
        }
        //console.log('ERRRRRR', error)
    })

    document.getElementById("upload_widget").addEventListener("click", function (event) {
        event.preventDefault()
        console.log('Upload image clicked!')
        myWidget.open();
    }, false);
   