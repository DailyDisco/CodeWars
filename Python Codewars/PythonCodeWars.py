# Regular Ball Super Ball (Level 8 Kyu)

class Ball(object):
    # your code goes here
    
    # create a function that takes in a ball_type that is regular
    def __init__(self, ball_type = "regular"):
        # the ball type will be "regular" if there is no parameter
        # if there is a parameter it will be the parameter value "super"
        self.ball_type = ball_type
        
        
        
# Sum Arrays

def sum_array(a):
#     return the sum of the array by casting sum on the a
    return(sum(a))



# Count of positives / sum of negatives 8 Kyu

def count_positives_sum_negatives(arr):
    if arr == []:
        return []
    
    posArr = []
    negArr = []
    for num in arr:
        if num > 0:
            posArr.append(num)
        else:
            negArr.append(num)
            
    print(posArr)
    print(negArr)

    return [len(posArr), sum(negArr)]

# simple calculator (8 Kyu)

def calculator(x,y,op):
    if type(x) != int:
        return "unknown value"
    if type(y) != int:
        return "unknown value"
    if op == "+":
        return x + y
    if op == "-":
        return x - y
    if op == "*":
        return x * y
    if op == "/":
        return x / y
    else:
        return "unknown value"
    pass