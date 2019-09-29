let truth = ["Have you ever cheated on a test?", "What was the last thing you ate?", "Do you have any unusual talents?", "Do you have any phobias?", "Have you ever used someone else's password?", "Have you ever ridden the bus without paying the fare?", "Do you message people during your classes?", "Have you ever fallen asleep during a class?", "Have you ever bitten a toenail?", "Have you ever stolen something?", "Are you a hard-working student?", "What was the best day of you life?", "What was the strangest dream you ever had?", "What is the most annoying thing to you (pet peeve)?", "If you could have a superpower, what would it be?", "Who is most important to you?"];
        let dare = ["Sing a song.", "Post 'I love English!' on social media.", "Say the English alphabet backwards.", "Give someone near you a compliment.", "Show the last photo you took with your phone.", "Do your best dance.", "Act like a cat.", "Act like a monkey and a donkey at the same time.", "Introduce yourself to someone you don't know.", "Smell the inside of your shoe.", "Call someone and ask if they believe in aliens.", "Act like a pirate.", "Talk about the last time you apologized.", "Act like you are swimming.", "Say the months of the year backwards."];
        let btn = document.getElementById("btn");
        let btn2 = document.getElementById("btn2");
        let content = document.getElementById('content');
        let chosen = document.getElementById('chosen');
        let clickCounter = 0;
        let truthCounter = 0;
        let dareCounter = 0;

        function randomTruthFn() {
            let randomTruth = truth[Math.floor(Math.random() * truth.length)];
            content.innerHTML = randomTruth;
            chosen.innerHTML = 'Truth';
        }

        function randomDareFn() {
            let randomDare = dare[Math.floor(Math.random() * dare.length)];
            content.innerHTML = randomDare;
            chosen.innerHTML = 'Dare';
        }

        function randomColorFn() {
            let randomColor1 = Math.floor(Math.random() * 256);
            let randomColor2 = Math.floor(Math.random() * 256);
            let randomColor3 = Math.floor(Math.random() * 256);
            document.body.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
        }

        function counter() {
            clickCounter++;
            timesPlayed.innerHTML = clickCounter;
        }

        function truthCounterFn() {
            truthCounter++;
            clickedTruth.innerHTML = truthCounter;
        }

        function dareCounterFn() {
            dareCounter++;
            clickedDare.innerHTML = dareCounter;
        }

        btn.addEventListener("click", function () {
            randomTruthFn();
            randomColorFn();
            counter();;
            truthCounterFn()
        });

        btn2.addEventListener("click", function () {
            randomDareFn();
            randomColorFn();
            counter();
            dareCounterFn();

        });