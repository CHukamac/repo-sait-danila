var trailers = ["trailer1.mp4", "trailer2.mp4", "trailer3.mp4"]; // Замените на ваши трейлеры
        var currentTrailerIndex = 0;
        var videoPlayer = document.getElementById("trailer-player");

        function playPrevious() {
            currentTrailerIndex = (currentTrailerIndex - 1 + trailers.length) % trailers.length;
            changeVideoSource();
        }

        function playNext() {
            currentTrailerIndex = (currentTrailerIndex + 1) % trailers.length;
            changeVideoSource();
        }

        function changeVideoSource() {
            videoPlayer.src = trailers[currentTrailerIndex];
            videoPlayer.load();
            videoPlayer.play();
        }


        function login() {
            // Ваш код для отправки данных на сервер и выполнения логина
            alert("Вход выполнен!");
}
        function register() {
            // Ваш код для отправки данных на сервер и выполнения регистрации
            alert("Регистрация выполнена!");
        }

        function redirectToBooking() {
            window.location.href = "bron.html";
        }

//бронь места
        var bookedSeats = []; // Массив для отслеживания забронированных мест

        function confirmBooking() {
            var selectedRow = document.getElementById("row").value;
            var selectedSeat = document.getElementById("seat").value;

            // Проверка, было ли выбранное место уже забронировано
            if (bookedSeats.includes(selectedRow + "-" + selectedSeat)) {
                alert("Это место уже забронировано. Выберите другое.");
            } else {
                alert("Бронирование подтверждено! Ряд: " + selectedRow + ", Место: " + selectedSeat);

                // Добавляем забронированное место в массив
                bookedSeats.push(selectedRow + "-" + selectedSeat);
            }
        }

//Страница Контакты
        function submitForm() {
            // Ваш код для обработки отправки формы
            // Очищаем значения полей после отправки
            document.getElementById("contactForm").reset();

            alert("Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
        }



//перенаправление на вкладку фильмы
        function goToMovies() {
            // Перенаправление на вкладку "Фильмы"
            window.location.href = "3.html";
	    window.location.href = "2.html";
        }
