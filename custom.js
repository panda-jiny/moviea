let movieBoard = document.querySelector("#movieBoard");
let apikey = "bb6e4b0c3a0d75468f7b7a5c1bca2b61";

// swiper card eff

//서버에서 원하는 영화 가지고 오기
movie = async (lists) => {
  //   console.log("movie");
  //   console.log(lists);

  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${lists}?api_key=${apikey}&language=ko-KR`,
  );

  //   console.log(response);
  let data = await response.json();
  //   console.log(data);

  movieList = data.results;
  console.log(movieList);
  render(movieList);

  // new Swiper(".mySwiper", {
  //   effect: "cards",
  //   grabCursor: true,
  // });
};

//화면에 나타내는 함수
render = (movieList) => {
  movieBoard.innerHTML = "";
  movieList.forEach((movie) => {
    // console.log(movie.title);
    // console.log(movie.poster_path);

    card = `
        <div class="card swiper-slide">
          <div class="imgBox">
          <div class="backLight"></div> 
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
              <p class="avg"><span>평점 </span>${Math.round(movie.vote_average)}</p>
              <h3>${movie.title}</h3>
          </div>
           
        </div>
    `;

    movieBoard.innerHTML += card;
  });
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  // console.log("width:", swiper.width);
  // console.log("slides:", swiper.slides.length);
  // console.log("isBeginning:", swiper.isBeginning);
  // console.log("isEnd:", swiper.isEnd);
  // console.log("allowTouchMove:", swiper.allowTouchMove);
};

function over(text, limit) {
  // console.log(text.length);
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}

movie("now_playing");
