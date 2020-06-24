function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    var greatestSum = null;
  
  for (var i = 0; i < arr.length - 2; i++) {
    for (var j = 0; j < arr[i].length - 2; j++) {
      var top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2],
          mid = arr[i + 1][j + 1],
          bot = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2],
          total = top + mid + bot;

      if (greatestSum === null || total > greatestSum) {
        greatestSum = total;
      }
    }
  }
  console.log(greatestSum);
}
