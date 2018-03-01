module.exports = function makeExchange(currency) {
                let Coin50 = 0,
                Coin25 = 0,
                Coin10 = 0,
                Coin5 = 0,
                Coin1 = 0;
                let temp = 0;
                let sum = {};

            if (currency > 10000) {
                sum.error = "You are rich, my friend! We don't have so much coins for exchange";
                return  sum;
            } 
           
            
                Coin50 = Math.floor(currency / 50);
                temp = currency % 50;

                Coin25 = Math.floor(temp / 25);
                temp = temp % 25;

                Coin10 = Math.floor(temp / 10);
                temp = temp % 10;

                Coin5 = Math.floor(temp / 5);
                temp = temp % 5;

                Coin1 = Math.floor(temp / 1);


               
                if (Coin50 > 0) {
                    sum['H'] = Coin50;
                }
                if (Coin25 > 0) {
                    sum['Q'] = Coin25;
                }
                if (Coin10 > 0) {
                   sum['D'] = Coin10;
                }
                if (Coin5 > 0) {
                    sum['N'] = Coin5;
                }
                if (Coin1 > 0) {
                    sum['P'] = Coin1;
                }

                

                return sum;
            }

