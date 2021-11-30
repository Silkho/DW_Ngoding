// initialize empty array to store blog
let blogs = []

function addBlog(event) {
    // make web page doesnt reload
    event.preventDefault()

    // get value from input form
    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image")

    // get image from input file
    image = URL.createObjectURL(image.files[0])

    // make all data post blog become one index
    let blog = {
        author: "Mutawasilkho",
        title: title,
        content: content,
        image: image,
        postedAt: new Date()
    }

    // store data blog to last index in array blogs
    blogs.push(blog)

    // make input to empty again after submit
    document.getElementById("input-blog-title").value = ""
    document.getElementById("input-blog-content").value = ""

    renderBlog()
}

function renderBlog() {
    // get blog content using DOM
    let blogContainer = document.getElementById("contents")

    // execute same code more than one (using looping)
    blogContainer.innerHTML = blog2()

    console.table(blogs)
    for (let i = 0; i < blogs.length; i++) {
        blogContainer.innerHTML += `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button style="font-family: 'Poppins', sans-serif;" class="btn-edit">Edit Post</button>
              <button style="font-family: 'Poppins', sans-serif;" class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
            ${blogs[i].postedAt} | ${blogs[i].author}
            </div>
            <p>${blogs[i].content}</p>
          </div>
        </div>`
    }
}

function blog2() {
    return ` 
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-image.jpg" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button style="font-family: 'Poppins', sans-serif;" class="btn-edit">Edit Post</button>
              <button style="font-family: 'Poppins', sans-serif;" class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
              >
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>
          </div>
        </div>
    `
}