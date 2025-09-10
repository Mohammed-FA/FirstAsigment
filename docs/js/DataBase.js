const products = [
  {
    name: "Lenovo P8 Tab 8",
    description:"cmsncsncs csmcnscscscsncs cscscscscs xsxcscscs acsjcabuccs cksmcicscs csncsmcsncscsc css",

    price: 329.99,
    image: "./images/images.jpeg",
    rating: 4,

  },
    {
    name: "Lenovo P8 Tab 8",
    description:"cmsncsncs csmcnscscscsncs cscscscscs xsxcscscs acsjcabuccs cksmcicscs csncsmcsncscsc css",

    price: 329.99,
    image: "./images/71Mt4JAZQtL.jpg",
    rating: 4,

  },
  {
    name: "Samsung Galaxy S21",
    description:"cmsncsncs csmcnscscscsncs cscscscscs xsxcscscs acsjcabuccs cksmcicscs csncsmcsncscsc css",
    price: 499.99,
    oldPrice: 549.99,
    image: "./images/images.jpeg",
    rating: 5,
    discount: true,
    isNew: false,
  },
  {
    name: "Apple iPad Mini",
    description:"cmsncsncs csmcnscscscsncs cscscscscs xsxcscscs acsjcabuccs cksmcicscs csncsmcsncscsc css",

    price: 599.99,
    oldPrice: null,
    image: "./images/71Mt4JAZQtL.jpg",
    rating: 3,
 
  },

    {
    name: "Apple iPad Mini",
    description:"cmsncsncs csmcnscscscsncs cscscscscs xsxcscscs acsjcabuccs cksmcicscs csncsmcsncscsc css",

    price: 599.99,
    oldPrice: null,
    image: "./images/71Mt4JAZQtL.jpg",
    rating: 3,

  },


    {
    name: "Apple iPad Mini",
    description:"cmsncsncs csmcnscscscsncs cscscscscs xsxcscscs acsjcabuccs cksmcicscs csncsmcsncscsc css",

    price: 599.99,
    oldPrice: null,
    image: "./images/images.jpeg",
    rating: 3,
  
  },


    {
    name: "Apple iPad Mini",
    description:"cmsncsncs csmcnscscscsncs cscscscscs xsxcscscs acsjcabuccs cksmcicscs csncsmcsncscsc css",

    price: 599.99,
    oldPrice: null,
    image: "./images/images.jpeg",
    rating: 3,
    discount: false,
    isNew: true,
  },


    {
    name: "Apple iPad Mini",
    description:"cmsncsncs csmcnscscscsncs cscscscscs xsxcscscs acsjcabuccs cksmcicscs csncsmcsncscsc css",

    price: 599.99,
    oldPrice: null,
    image: "./images/71Mt4JAZQtL.jpg",
    rating: 3,

  },


    {
    name: "Apple iPad Mini",
    description:"cmsncsncs csmcnscscscsncs cscscscscs xsxcscscs acsjcabuccs cksmcicscs csncsmcsncscsc css",

    price: 599.99,
    oldPrice: null,
    image: "./images/71Mt4JAZQtL.jpg",
    rating: 3,
  },
];



// دالة توليد النجوم
function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += `<i class="bi bi-star-fill text-yellow-400"></i>`;
    } else {
      stars += `<i class="bi bi-star text-gray-300"></i>`;
    }
  }
  return stars;
}

// رندر المنتجات
const productList = document.getElementById("containerproduct");
const RecendViewed=document.getElementById("RecendViewed")
products.forEach((product,index) => {
  if(index<4){
    console.log(index)
    RecendViewed.innerHTML+=`
      <div class="bg-white group rounded relative hover:scale-105 hover:shadow-2xl duration-300   p-4 px-5">
      <div class="w-full h-80  flex ">
        <img src="${product.image}" class="w-full h-full " alt="product">
          </div>
          <div class="flex flex-col gap-2">
              <div class="flex gap-2 text-startcolor">
                 ${generateStars(product.rating)}
              </div>
              <h3 class="font-bold text-sm text-black/80 title ">${product.name}</h3>
              <p class="text-black font-bold  ">$${product.price} ${product.oldPrice? `<span class='text-gray-400 line-through text-sm'>$${product.oldPrice}</span>`:' '} </p>
              <div
                  class="flex justify-between items-center max-h-0 overflow-hidden group-hover:max-h-72 duration-300">
                  <button class="bg-primary text-white px-3 py-2 rounded-full">Add to cart</button>
                  <button
                      class="border border-gray-300   rounded-full h-10 w-10 flex justify-center items-center text-base">
                      <i class="bi bi-heart"></i>

                  </button>
              </div>
               ${product.discount ? ` <span
                            class="rounded-r-2xl rounded-br-2xl bg-red-500 absolute top-0 left-0 px-3 py-1 text-white">-50%</span>` : product.isNew ? `<span
                            class="rounded-r-2xl rounded-br-2xl  bg-blue-500 absolute top-0 left-0 px-3 py-1 text-white">New</span>` : ""}
          </div>
        </div>

    `
  }
  const productCard = `
    <div class="bg-white relative z-0 hover:z-50 cardproduct xxs:flex-nowrap flex-wrap  xl:w-1/4 md:w-1/3 xxs:w-1/2 hover:p-4 w-full group rounded hover:scale-105 hover:shadow-2xl duration-300  px-5">
      <div class="w-full h-80  flex ">
        <img src="${product.image}" class="w-full h-full " alt="product">
        
        </div>
        <div class="flex   continerProductitem" >
        <div class="flex flex-col gap-2 sm:text-sm text-xs">
            <div class="flex gap-2 text-startcolor stars">
             ${generateStars(product.rating)}
            </div>
            <h3 class="font-bold text-sm text-black/80 title ">${product.name}</h3>
            <p class="text-black/80 font-medium leading-3.5   line-clamp-3 hidden productdecritpion">${product.description}</p>
            <p class="text-black font-bold  ">$${product.price} ${product.oldPrice? `<span class='text-gray-400 line-through text-sm'>$${product.oldPrice}</span>`:' '} </p>

            <div
                class="flex justify-between hoverdiv items-center max-h-0 overflow-hidden group-hover:max-h-72 duration-300">
                <button class="bg-primary text-white px-3 py-2 rounded-full">Add to cart</button>
                <button
                class="border border-gray-300   rounded-full h-10 w-10 flex justify-center items-center text-base">
                <i class="bi bi-heart"></i>
                </button>
                </div>
          </div>
        </div>
            ${product.discount ? ` <span
                            class="rounded-r-2xl rounded-br-2xl bg-red-500 absolute top-0 left-0 px-3 py-1 text-white">-50%</span>` : product.isNew ? `<span
                            class="rounded-r-2xl rounded-br-2xl  bg-blue-500 absolute top-0 left-0 px-3 py-1 text-white">New</span>` : ""}
            
    </div>
  `;
  
  productList.innerHTML += productCard;
});

