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

# Alan Partridge II - Apple Turnover 8 Kyu Python
def apple(x):
    if int(x) ** 2 > 1000:
        return "It's hotter than the sun!!"
    else:
        return "Help yourself to a honeycomb Yorkie for the glovebox."
    
# Do you speak "English"? 8 Kyu Python
def sp_eng(sentence): 
    # your code here
    if "english" in sentence.lower():
        return True
    else:
        return False
    
# Define a card suit 8 Kyu Python
def define_suit(card):
    # Good luck
    if ('d' in card.lower()):
        return 'diamonds'
    if ('c' in card.lower()):
        return 'clubs'
    if ('h' in card.lower()):
        return 'hearts'
    if 's' in card.lower():
        return 'spades'
    
# Compare within margin 8 Kyu Python

# Give margin an initial value of 0 because it is optional
def close_compare(a, b, margin=0):
    # check if a - b (whether negative or postive) is <= margin or a == b
    if abs(a - b) <= margin or a == b:
        return 0
    elif a < b:
        return -1
    elif b < a:
        return 1
    
# Remove the time 8 Kyu Python
def shorten_to_date(long_date):
    #your code here
    # split at the , and grab the array value of everything before that
    return long_date.split(',')[0]

# Holiday VIII - Duty Free 8 Kyu Python

def duty_free(price, discount, holiday_cost):
  return int(holiday_cost / ((price * discount) / 100 ))

# Categorize New Member 7 Kyu Python
def open_or_senior(data):
    # return 'Senior'
    # if the first value in data which is the age is equal to or greater than 55
    # and if the second value in data which is the handicap is greater than 7
    # if those value are not satisfied
    # return 'Open' for the values in data
    return ['Senior' if person[0] >= 55 and person[1] > 7 else 'Open' for person in data]

# Sum of Cubes 7 Kyu Python
def sum_cubes(n):
    # your code here
    finalTotal = 0
    whileCount = 0
    
    while whileCount <= n:
        finalTotal = finalTotal + pow(whileCount, 3) 
        whileCount = whileCount + 1
    return finalTotal