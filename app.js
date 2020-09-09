document.addEventListener('DOMContentLoaded', () => {

    const btns = document.querySelectorAll('.btn');
    const squares = document.getElementsByClassName('squares');
    let count = 0;
    squares[0].classList.add('piece1');

    btns[0].addEventListener('click', () => {

        count = count - 1;

        for (let i = 0; i < squares.length; i++) {

            if (squares[0].classList.contains('piece1')) {

                count = 0;
            }

            if (squares[i].classList.contains('piece1')) {

                squares[i].classList.remove('piece1');

                squares[count].classList.add('piece1');

            }
        }
    });


    btns[1].addEventListener('click', () => {

        count = count + 1;

        for (let i = 0; i < squares.length; i++) {

            if (squares[i].classList.contains('piece1')) {

                squares[i].classList.remove('piece1');

                squares[count].classList.add('piece1');

            } else if (squares[8].classList.contains('piece1')) {

                count = 8;
            }
        }
    });



    btns[2].addEventListener('click', () => {

        count = count - 3;

        for (let i = 0; i < squares.length; i++) {

            if (squares[0].classList.contains('piece1')) {

                count = 0;

            } else if (squares[1].classList.contains('piece1')) {

                count = 1;

            } else if (squares[2].classList.contains('piece1')) {

                count = 2;

            } else if (squares[i].classList.contains('piece1')) {

                squares[i].classList.remove('piece1');

                squares[count].classList.add('piece1');
            }
        }
    });

    btns[3].addEventListener('click', () => {

        count = count + 3;

        for (let i = 0; i < squares.length; i++) {

            if (squares[i].classList.contains('piece1')) {

                squares[i].classList.remove('piece1');

                squares[count].classList.add('piece1');

            } else if (squares[8].classList.contains('piece1')) {
                count = 8;

            } else if (squares[7].classList.contains('piece1')) {

                count = 7;

            } else if (squares[6].classList.contains('piece1')) {

                count = 6;
            }
        }
    }); 



    /* function moveSquare(e) {

        
        switch (e.keyCode) {

            case 37:

                count = count - 1;

                for (let i = 0; i < squares.length; i++) {

                    if (squares[0].classList.contains('piece1')) {

                        count = 0;
                    }

                    if (squares[i].classList.contains('piece1')) {

                        squares[i].classList.remove('piece1');

                        squares[count].classList.add('piece1');

                    }
                }
                break;

            case 38:

                count = count - 3;

                for (let i = 0; i < squares.length; i++) {

                    if (squares[0].classList.contains('piece1')) {

                        count = 0;

                    } else if (squares[1].classList.contains('piece1')) {

                        count = 1;

                    } else if (squares[2].classList.contains('piece1')) {

                        count = 2;

                    } else if (squares[i].classList.contains('piece1')) {

                        squares[i].classList.remove('piece1');

                        squares[count].classList.add('piece1');
                    }
                }

                break;

            case 39:

                count = count + 1;

                for (let i = 0; i < squares.length; i++) {

                    if (squares[i].classList.contains('piece1')) {

                        squares[i].classList.remove('piece1');

                        squares[count].classList.add('piece1');

                    } else if (squares[8].classList.contains('piece1')) {

                        count = 8;
                    }
                }

                break;

            case 40:

                count = count + 3;

                for (let i = 0; i < squares.length; i++) {

                    if (squares[i].classList.contains('piece1')) {

                        squares[i].classList.remove('piece1');

                        squares[count].classList.add('piece1');

                    } else if (squares[8].classList.contains('piece1')) {
                        count = 8;

                    } else if (squares[7].classList.contains('piece1')) {

                        count = 7;

                    } else if (squares[6].classList.contains('piece1')) {

                        count = 6;
                    }
                }
                break;


        }
    } 
    
     
    document.addEventListener('keyup', moveSquare);  */

}); 