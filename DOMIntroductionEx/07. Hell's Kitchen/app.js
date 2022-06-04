function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const html = {
         inputField: document.querySelector("#inputs textarea"),
         outputRestaurant: document.querySelector("#bestRestaurant p"),
         outputWorkers: document.querySelector("#workers p")
      };

      const salaryMethods = {
         calcAverageSalary: function(restaurant) {
            let workersCount = restaurant.workers.length;
   
            let sumSalaries = 0;
   
            restaurant.workers.forEach(worker => {
               sumSalaries += worker.salary;
            });
   
            return sumSalaries / workersCount;
         },
   
         findBestSalary: function (workers) {
            let best = Number.MIN_VALUE;
   
            workers.forEach(worker => {
               if (worker.salary > best) {
                  best = worker.salary;
               }
            });
   
            return best;
         }
      };

      const output = {
         getAllWorkersInfo: function(workers) {
            let result = "";
   
            workers.forEach(worker => {
               result += `Name: ${worker.name} With Salary: ${worker.salary} `;
            })
   
            return result.trim();
         }
      };

      const input = {
         getRestaurants: function(inputField) {
            function getWorkers(info) {
               let arrWorkers = [];
      
               info.shift();
               let workers = info[0].split(', ');
      
               workers.forEach((workerInfo) => {
                  let worker = {};
      
                  worker.name = workerInfo.split(" ")[0];
                  worker.salary = Number(workerInfo.split(" ")[1]);
      
                  arrWorkers.push(worker);
               });
      
               return arrWorkers;
            }
   
            let arrRestaurants = JSON.parse(inputField.value);
   
            let restaurants = [];
   
            for (const restaurantInfo of arrRestaurants) {
               let info = restaurantInfo.split(' - ');
   
               const restaurant = {};
   
               restaurant.name = info[0];
               restaurant.workers = getWorkers(info);
   
               restaurants.push(restaurant);
            }
   
            return restaurants;
         }
      }

      function findBestRestaurant(restaurants) {   
         let bestAverage = Number.MIN_VALUE;
         let indexOfBest;
         
         for (let i = 0; i < restaurants.length; i++) {
            let currAverage = salaryMethods.calcAverageSalary(restaurants[i]);

            if (currAverage > bestAverage) {
               bestAverage = currAverage;
               indexOfBest = i;
            }
         }

         return indexOfBest;
      }

      let restaurants = input.getRestaurants(html.inputField);
   
      let bestRestaurant = restaurants[findBestRestaurant(restaurants)];
      
      html.outputRestaurant.textContent = `Name: ${bestRestaurant.name} Average Salary: ${salaryMethods.calcAverageSalary(bestRestaurant).toFixed(2)} Best Salary: ${salaryMethods.findBestSalary(bestRestaurant.workers).toFixed(2)}`;

      html.outputWorkers.textContent = output.getAllWorkersInfo(bestRestaurant.workers);
   }
}