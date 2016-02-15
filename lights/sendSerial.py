import serial
import sys
import time
ser = serial.Serial('/dev/ttyACM0', 9600)
#time.sleep(3)

numBlinks = sys.argv[1]

ser.write(numBlinks)

print("worked!")