//Count number of squares in a mxn rectangle
//Given a m x n rectangle, how many squares are there in it?

function countNumberOfSquare(m, n) {
    'use strict';
    var biggestSquareSize = Math.min(m, n),
        noOfSqaure = 0,
        i;
    for (i = 1; i <= biggestSquareSize; i++) {
        noOfSqaure += (m - i + 1) * (n - i + 1);
    }
    return noOfSqaure;
}

function countNumberOfSquare(m, n) {
    'use strict';
    if(n < m){ //Swap m and n
        m = m + n;
        n = m - n;
        m = m - n;
    }
    
    return m*(m+1)*(2*m+1)/6 + (n-m)*m*(m+1)/2;
}
