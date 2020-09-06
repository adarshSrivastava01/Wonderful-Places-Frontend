# Q 1

# 1.	Check the python version installed on your system through commandline.

# Ans No. 1

# python --version

# Output -> Python 3.7.4


# Q 2

# 2.	WAP to print the ASCII value of a character. [Hint : ord() function]

# Ans. No. 2

character = input("Enter A Character to find it's Ascii Value: ")
print(ord(character))


# Q 3

# 3.	WAP to find difference of two small integers (not greater than 10) without using minus (-) operator. [Hint : Use ~ operator]

num1 = int(input("Enter The First Number >>> "))
num2 = int(input("Enter The Second Number >>> "))
print(num1 + (~num2 + 1))

# 4.	WAP to multiply a given number by 2 without using * (multiply operator).

num = int(input("Enter The Number >>> "))
print(num<<1)


# 5.	WAP to calculate and display the interest on a loan amount(Rupees).
# You would need three variables to hold ‘principal’, Rate_of_interest’(%) and ‘time’ in years and can use the formula
# Interest=(principal*rate_of_interest*time)/100
# Note :Take user input

principal = float(input("Enter The Value of Principal >>> "))
rate_of_interest = float(input("Enter The Value of Rate of Interest >>> "))
time = float(input("Enter The Value of Time in years >>> "))

interest = (principal * rate_of_interest * time) / 100

print(interest)


"""
NAME: ADARSH SRIVASTAVA
ROLL NO. 1901640100019
CLASS: CS-2A
"""