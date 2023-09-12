#!/usr/bin/python3
""" Module """

Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    """ Class """

    def __init__(self, size):
        self.integer_validator("size", size)
        self.__size = size

    def area(self):
        return self.__size * self.__size

    def __str__(self):
        return f"[{self.__class__.__name__}] {self.__size}/{self.__size}"