async function enablePhotoUpload() {
  const imageInput = document.querySelector("#image-input");

  imageInput.addEventListener("change", (event) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploadImage = reader.result;

      changeMemePicture(uploadImage);
    });
    reader.readAsDataURL(event.target.files[0]);
  });
}

async function mapImageList() {
  const memesObj = [
    {
      name: "Selecione uma imagem padrão",
      path: "./public/pictures/1.png",
    },
    {
      name: "Fabrica Chocolate",
      path: "./public/pictures/2.jpg",
    },
    {
      name: "Faustão",
      path: "./public/pictures/3.png",
    },
    {
      name: "Joelma",
      path: "./public/pictures/4.png",
    },
    {
      name: "Menino 1",
      path: "./public/pictures/5.jpg",
    },
    {
      name: "mimimi",
      path: "./public/pictures/6.jpg",
    },
    {
      name: "Clhoe",
      path: "./public/pictures/7.png",
    },
    {
      name: "Naldo",
      path: "./public/pictures/8.jpg",
    },
  ];

  return memesObj;
}

async function createGallery(imageList) {
  const memeSelector = document.querySelector("#meme-list");
  imageList.forEach((picture) => {
    let newOption = document.createElement("option");
    newOption.text = picture.name.toUpperCase();
    newOption.value = picture.path;
    memeSelector.appendChild(newOption);
  });
}

async function changeMemePicture(photo) {
  let displayImage = document.querySelector("#display-image");
  displayImage.style.backgroundImage = `url("${photo}")`;
}

async function main() {
  enablePhotoUpload();
  const memesImageList = await mapImageList();
  await createGallery(memesImageList);
  await changeMemePicture(memesImageList[0].path);
}

main();
