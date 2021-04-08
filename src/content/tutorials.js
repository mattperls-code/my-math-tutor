/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

const tutorials = [
    {
        "title": "Linear One Variable Equations",
        "id": "t-LOVE",
        "imageSource": require("../assets/previews/LOVE.png").default,
        "keywords": [
            "linear",
            "one",
            "variable",
            "equations",
            "algebra"
        ],
        "description": "Learn how to solve linear algebraic equations with one variable",
        "difficulty": "7.5/10",
        "tutorial": {
            "introduction": "Linear one variable equations are equations that only contain one variable, and that variable is only raised to the first power.",
            "instructions": "To solve a linear one variable equation, you must move all variables from both sides of the equation to one side and then move all constant values to the other side. This means following the order of operations to systematically sperate the constants and variables. Remember that with algebra, anything you do to one side must be done to the other, so if moving a variable or constant requires you to do an operation, it must be done on the other side too.",
            "problem1": "3x - 2 = 10\n3x - 2 (+2) = 10 (+2)\n3x = 12\n3x (/3) = 12 (/3)\nx = 4\n\nFirst, we added 2 to both sides of the equation to further isolate the variable x.\nThen we divided both sides by 3, in order to get the variable by itself.\nFrom there, we have the answer: x = 4.",
            "problem2": "-2x + 5 = 4\n-2x + 5 (-5) = 4 (-5)\n-2x = -1\n-2x (/-2) = -1 (/-2)\nx = -1/2\n\nFirst We subtracted 5 from both sides of the equation to remove the constant from that side.\nNext, we divided both sides by -2, in order to isolate the variable.\nThat left the solution, x = -1/2."
        }
    },
    {
        "title": "Linear One Variable Inequalities",
        "id": "t-LOVI",
        "imageSource": require("../assets/previews/LOVI.png").default,
        "keywords": [
            "linear",
            "one",
            "variable",
            "inequalities",
            "algebra"
        ],
        "description": "Learn how to solve linear inequalities with one variable",
        "difficulty": "8/10",
        "tutorial": {
            "introduction": "Linear one variable inequalities are inequalities that only contain one variable, and that variable is only raised to the first power.",
            "instructions": "The solution to a linear one variable inequality will be an inequality where one side has a completely isolated variable and the other side is a constant. This means you need to move the constants and variables around with algebra to get the solution. Remember that with algebra, any operations done to one side must be done to the other side. Additionally, if you multiply or divide both sides by a negative number, you need to switch the equality operator to its opposite.",
            "problem1": "-x + 1 > 3\n-x + 1 (-1) > 3 (-1)\n-x > 2\n-x (/-1) > 2 (/-1)\nx < -2\n\nFirst we subtracted 1 from both sides to isolate the variable.\nNext, we divided both sides by -1 to remove the variables coefficient. Remember that we had to reverse the inequality operator because we divided by a negative number.\nNow that the variable is isolated and has no coefficient, we have the solution: x < -2.",
            "problem2": "3x + 8 ≤ 5\n3x + 8 (-8) ≤ 5 (-8)\n3x ≤ -3\n3x (/3) ≤ -3 (/3)\nx ≤ -1\n\nThe first step was subtracting 8 from both sides to isolate x.\nThen we divided both sides by 3 to get the variable by itself.\nThat gavess us the solution, x ≤ -1"
        }
    },
    {
        "title": "Mean",
        "id": "t-Mn",
        "imageSource": require("../assets/previews/Mn.png").default,
        "keywords": [
            "mean",
            "measure",
            "of",
            "center",
            "set",
            "list",
            "average"
        ],
        "description": "Learn how to calculate the mean of a set of numbers",
        "difficulty": "6.5/10",
        "tutorial": {
            "introduction": "The mean of a set of numbers is its average. It is one of the most useful measures of center, since it is influenced by every number in the set.",
            "instructions": "To calculate the mean of a set of numbers, you must first add every number. Then, divide that sum by the size of the set. Remember that even duplicate numbers are still incorporated into the sum and size of the set.",
            "problem1": "9, -2, 4, 2\n9 + -2 + 4 + 2\n13\n13 / 4\n3.25 or 3 ¼\n\nFirst, we added up all of the numbers in the set.\nThen we divided by 4, since the set contained 4 numbers.\nFinally we can convert that fraction to a decimal or mixed number to find the answer.",
            "problem2": "8, -4, 3, 7, 7, -1\n8 - 4 + 3 + 7 + 7 - 1\n20\n20 / 6\n3 and ⅓\n\nThe First step was to add all the numbers, including the duplicate 7. Next, we divided by 6, because the set has 6 numbers. Then we converted the fraction to a mixed number for our answer."
        }
    },
    {
        "title": "Median",
        "id": "t-Mn",
        "imageSource": require("../assets/previews/Mn.png").default,
        "keywords": [
            "median",
            "measure",
            "of",
            "center",
            "set",
            "list",
            "middle"
        ],
        "description": "Learn how to find the median, or middle value, of a set of numbers",
        "difficulty": "5.5/10",
        "tutorial": {
            "introduction": "The median of a set of numbers is the value contained in the set that is closest to the middle. It is commonly used when the set of numbers has an outlier, or a number separate from most of the data.",
            "instructions": "To find the median, first list the numbers from least to greatest. Remove the outer 2 most numbers from the set until either 1 or 2 numbers remain. If there is 1 number left, that is the median. If there are 2 numbers left, add them and divide by 2 to find the median.",
            "problem1": "-6, 2, 1, -8, -3\n-8, -6, -3, 1, 2\n-6, -3, 1\n-3\n\nFirst we sorted the numbers from least to greatest.\nThen, because there were not exactly 1 or 2 numbers left, we removed the leftmost and rightmost values.\nSince there were still not exactly 1 or 2 numbers left, we removed the leftmost and rightmost numbers again.\nNow, since there was only 1 number left, we have the median, -3.",
            "problem2": "3, 1, -9, 7, 6, 4\n-9, 1, 3, 4, 6, 7\n1, 3, 4, 6\n3, 4\n(3 + 4) / 2\n7/2\n3.5 or 3 ½\n\nFirst, we sorted all the number from least to greatest.\nNext we removed the outermost numbers because there are not exactly 1 or 2 numbers left.\nThen we removed the outermost numbers again, because there aren't exactly 1 or 2 numbers left.\nNow that only 2 numbers are left, because there are 2 left, we added them, and then divided by 2.\nFrom there, we converted the fraction to a decimal or mixed number, which gave us the median."
        }
    },
    {
        "title": "Mode",
        "id": "t-Mo",
        "imageSource": require("../assets/previews/Mo.png").default,
        "keywords": [
            "mode",
            "measure",
            "of",
            "center",
            "set",
            "list",
            "most",
            "common"
        ],
        "description": "Learn how to find the mode, or most common value, in a set of numbers",
        "difficulty": "4.5/10",
        "tutorial": {
            "introduction": "The mode is the number that is most commonly found in a set of numbers. The mode is helpful when you want to know what numbers occur the most.",
            "instructions": "Finding the mode is pretty simple. Whenever you see a number more than once in the set, mark it, and at the end, find which number was in the set the most. More than one number can be the mode, so if multiple numbers are tied for the most they are all the mode. However, if every number is listed an equal number of times, then the set has no mode, since every number is just as common. You may find it helpful to use a graph or chart for larger sets of numbers.",
            "problem1": "3, 8, -2, 3, 1\n3\n\nFirst we looked through the set of numbers\nWe can see that 3 is listed twice, and because this is more than any of the other numbers, it is the mode.",
            "problem2": "-2, -3, 4, 4, -2, 6\n-2 and 4\n\nOur first step was to look at the set of numbers and count how many times each number is listed.\nWe can see that -2 and 4 are both listed twice, and each other number is only listed once.\nWe can have multiple modes, so the answer is -2 and 4."
        }
    },
    {
        "title": "Minimum",
        "id": "t-Mi",
        "imageSource": require("../assets/previews/Mi.png").default,
        "keywords": [
            "minimum",
            "measure",
            "of",
            "center",
            "set",
            "list",
            "small"
        ],
        "description": "Learn how to find the minimum in a set of numbers",
        "difficulty": "4/10",
        "tutorial": {
            "introduction": "The minimum in a set of numbers is the smallest number that is listed. Knowing the mimimum of a set of numbers can help you find how much the numbers in the set vary.",
            "instructions": "Finding the minimum of a set of numbers is pretty simple. All you need to do is go through every number in the set, and find the smallest one. The minimum can be a duplicate, so remember to look at them too.",
            "problem1": "3, -9, 5, 6, -1\n-9\n\nJust by going through the set, we can easilly find the minimum.\n-9 is the smallest number, so that is the minimum of the set.",
            "problem2": "-4, -1, -5, -9, -3\n-9\n\nAll the numbers are negative, so it can be easier to find minimum by finding the largest number not including the negative sign.\n-9 is the largest number not including the negative sign, so it is the minimum of the set."
        }
    },
    {
        "title": "Maximum",
        "id": "t-Mx",
        "imageSource": require("../assets/previews/Mx.png").default,
        "keywords": [
            "maximum",
            "measure",
            "of",
            "center",
            "set",
            "list",
            "big"
        ],
        "description": "Learn how to find the maximum in a set of numbers",
        "difficulty": "4/10",
        "tutorial": {
            "introduction": "The maximum in a set of numbers is the largest number that is listed. Knowing the maximum of a set of numbers can help you find how much the numbers in the set vary.",
            "instructions": "To find the maximum of a set of numbers, go through each number, keeping track of the largest number so far. Once you have gone through every number, the number that was the largest in the set is the maximum. Don't leave out duplicate numbers, they can be the maximum too. For larger sets of numbers, you may find it helpful to write down the largest number so far as you go through the set.",
            "problem1": "4, -9, 2, 5, -3\n5\n\n\nBy going through the set, we can pretty easilly see that the largest number is 5, so that is the sets maximum.",
            "problem2": "-1, -6, -7, -4\n-1\n\nDon't let the negative numbers discourage you, it is still the same process.\nBy going through the set we can find that -1 is the largest number.\nIf a set of all negative numbers seems harder, you can try thinking of it as finding the smallest number if all of the negative signs were not there."
        }
    },
    {
        "title": "Sum",
        "id": "t-S",
        "imageSource": require("../assets/previews/S.png").default,
        "keywords": [
            "sum",
            "set",
            "list",
            "total"
        ],
        "description": "Learn how to calculate the sum of a set of numbers",
        "difficulty": "5.5/10",
        "tutorial": {
            "introduction": "The sum of a set of numbers is the value you get from adding each number in the set",
            "instructions": "To calculate the sum of a set of numbers, add each number in the set together.",
            "problem1": "5, -2, -5, 8, 2\n5 - 2 - 5 + 8 + 2\n8\n\nTo calculate the sum of this set, we just need to add up all the numbers.\nAfter adding them, we got 8, and that is the sum of this set.\nIf its hard to add numbers with different signs for you, you can group them, and solve it like (5 + 8 + 2) - (2 + 5). To do this, we simply grouped every positive value and negative value first to simplify the signs.",
            "problem2": "8, 4, -2, -1, -9\n8 + 4 - 2 - 1 - 9\n0\n\nFirst we added up all of the numbers.\nThis gave us 0, which is the sum.\nRemember that the sum can be positive, negative, or 0."
        }
    },
    {
        "title": "Interquartile Range",
        "id": "t-IqR",
        "imageSource": require("../assets/previews/IqR.png").default,
        "keywords": [
            "interquartile",
            "range",
            "measure",
            "of",
            "variation",
            "set",
            "list",
            "iqr"
        ],
        "description": "Learn how to calculate the interquartile range of a set of numbers",
        "difficulty": "6.5/10",
        "tutorial": {
            "introduction": "The interquartile range is the the distance between the first and third quartile in a set of data. It can be helpful for determining how much a set varies.",
            "instructions": "Finding the interquartile range of a set takes a few steps. First, you must calculate the quartiles of the set, this basically means dividing the set into 4 quarters. First you need to split the set into halves. To do this, find the median of the set. If it is exactly one number, split the set at the median, otherwise split the set in between the two middle numbers. Now that the set is split in two, calculate the median of both halves. Now subtract the smaller median from the larger. This will give you the interquartile range.",
            "problem1": "3, 5, -4, 2, -6\n-6, -4, 2, 3, 5\nHalves: (-6, -4) and (3, 5)\n-5 and 4\n4 - (-5)\n9\n\nFirst, we sorted the set from least to greatest, as you normally do to find the median.\nThe median is exactly one number, 2, so we split the set into two sides from 2.\nNow the halves are -6, -4 and 3, 5.\nNext we calculate the median for both halves, which are -5 and 4.\nLastly, we subtract the smaller from the larger, 4 - (-5).\nThis gives us the interquartile range, 9.",
            "problem2": "7, 3, -5, 2, -8, -4\n-8, -5, -4, 2, 3, 7\nHalves: (-8, -5, -4) and (2, 3, 7)\n-5 and 3\n3 - (-5)\n8\n\nWe first sorted the numbers.\nThen, because the median was between two numbers, we split the set inbetween.\nThis gave is the halves (-8, -5, -4) and (2, 3, 7).\nWe then calculated the median of these halves, which were -5 and 3.\nWe subtracted the smaller median from the larger median, 3 - (-5).\nThis gave us the solution, 8."
        }
    },
    {
        "title": "Range",
        "id": "t-R",
        "imageSource": require("../assets/previews/R.png").default,
        "keywords": [
            "range",
            "measure",
            "of",
            "variation",
            "set",
            "list"
        ],
        "description": "Learn how to calculate the range of a set of numbers",
        "difficulty": "6/10",
        "tutorial": {
            "introduction": "The range of a set is the distance between the minimum and maximum of the set. Knowing the range of a set can be helpful for determining how much the numbers in the set varies.",
            "instructions": "To find the range of a set, first calculate the minimum and maximum of the set. From there, you will subtract the minimum from the maximum to calculate the range. If you don't know how to find the minimum and maximum of a set, we have tutorials to show you.",
            "problem1": "9, 4, -2, -8, 2\nMinimum: -8\nMaximum: 9\n9 - (-8)\n17\n\nFirst we found the minimum, which for this set was -9.\nNext we found the maximum, which was 8.\nFinally we subtracted the minimum from the maximum, to get 9 - (-8), or 17 which is the answer.",
            "problem2": "4, -5, 2, 4, 7\nMinimum: -5\nMaximum: 7\n7 - (-5)\n12\n\nThe first step was to find the minimum, -5.\nThen we found the maximum, 7.\nLastly, we subtracted the minimum from the maximum to get the range, 12."
        }
    },
    {
        "title": "Mean Absolute Deviation",
        "id": "t-MAD",
        "imageSource": require("../assets/previews/MAD.png").default,
        "keywords": [
            "mean",
            "absolute",
            "deviation",
            "measure",
            "of",
            "variation",
            "set",
            "list",
            "mad"
        ],
        "description": "Learn how to find the mean absolute deviation in a set of numbers",
        "difficulty": "7.5/10",
        "tutorial": {
            "introduction": "The mean absolute deviation ( or MAD for short) in a set of numbers is the average amount numbers are away from the mean. Knowing the mean abssolute deviation is very helpful for determining how much variation there is in the set.",
            "instructions": "The first step in finding the mean absolute deviation in a set is finding the mean. Then you add up the absolute value of the difference between the number and the mean for each number in the set. Lastly, you divide that sum by the size of the set to get the solution.",
            "problem1": "3, -1, 2, 4, 7\nMean: 3\nSum: |3 - 3| + |-1 - 3| + |2 - 3| + |4 - 3| + |7 - 3|\n10\n10 / 5\n2\n\nFirst, we found the mean of the set, 3.\nThen, we added up the absolute value of the difference between the mean and each value in the set, which gave us 10.\nThen we divided this by the size of the set, 5, which gave us the mean absolute deviation in the set, 2.",
            "problem2": "5, -2, -9, 2\nMean: -1\nSum: |5 - 1| + |-2 - 1| + |-9 - 1| + |2 - 1|\n18\n18 / 4\n4.5\n\nThe first step was finding the mean, which was -1.\nNext we added up the absolute value of the difference between the mean and each number, which was 18.\nFinally, we divided that by the size of the set, 4, and got that the mean absolute deviation in the set is 4.5."
        }
    }
]

export default tutorials