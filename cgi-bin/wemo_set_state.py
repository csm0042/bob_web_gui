#!python

# Import modules for CGI handling
import cgi
import cgitb
import os
import sys
import pywemo

cgitb.enable()

# Create instance of FieldStorage
form = cgi.FieldStorage()

# Get data from fields
dev_name = form["devname"]
dev_addr = form["devaddr"]
dev_cmd = form["devcmd"]

#dev_name = 'fylt1'
#dev_addr = '192.168.86.21'
#dev_cmd = 'on'

# Disable print output while performing wemo commands
sys.stdout = open(os.devnull, "w")

# Scan network for device
try:
    dev_port = pywemo.ouimeaux_device.probe_wemo(dev_addr)
except Exception:
    dev_port = None

# If device is found, probe device for remaining necessary info
if dev_port is not None:
    dev_url = 'http://%s:%i/setup.xml' % (dev_addr, dev_port)
    device = pywemo.discovery.device_from_description(dev_url, None)
else:
    device = None

# Send command to device
if device is not None:
    if dev_cmd.lower() == "on" or dev_cmd.lower() == "1":
        device.on()
    elif dev_cmd.lower() == "off" or dev_cmd.lower() == "0":
        device.off()

# Get status update from device to see if command was executed
#    dev_stat = str(device.get_state(force_update=True))
#else:
#    dev_stat = "offline"

# Re-enable print output
sys.stdout = sys.__stdout__

# Return results
#print("Content-Type: text/html\r\n\r\n")
#print("<html>\n<head>\n</head>\n<body>\n")
#print(dev_stat)
#print("</body>\n</html>")
