from tkinter import *
import templates
import tkinter.messagebox

root = Tk()

# tkinter.messagebox.showinfo('Template Master')
# popup_ans = tkinter.messagebox.askquestion('Question 1 ', 'How do you like apples?')

menuTemplate = Menu(root)
root.config(menu=menuTemplate)
subMenu = Menu(menuTemplate)
menuTemplate.add_cascade(label="File", menu=subMenu)

id = Label(root, text = "Client ID")
id.grid( row = 1, column = 1, sticky = E)
id_entry = Entry(root, bd = 3)
id_entry.grid(row = 1,column = 2)


client = Label(root, text = "Client Name", anchor=E)
client.grid(row = 2, column = 1, sticky = E)
client_entry = Entry(root, bd = 3)
client_entry.grid(row = 2, column = 2)

vlan = Label(root, text = "VLAN")
vlan.grid(row = 3, column = 1, sticky = E)
vlan_entry = Entry(root, bd = 3)
vlan_entry.grid(row = 3, column = 2)

ip_mon = Label(root, text = "IP Monitoria")
ip_mon.grid(row = 4, column = 1, sticky = E)
ip_mon_entry = Entry(root, bd = 3)
ip_mon_entry.grid(row = 4, column = 2)
mask = Label(root, text = "Mask")
mask.grid(row = 4, column = 3, sticky = E)
mask_entry = Entry(root, bd = 3)
mask_entry.insert(END, '255.255.255.240')
mask_entry.grid(row = 4, column = 4)

dg = Label(root, text = "Default Gateway")
dg.grid(row = 5, column = 1, sticky = E)
dg_entry = Entry(root, bd = 3)
dg_entry.grid(row = 5, column = 2)

descripcion = Label(root, text = "Description")
descripcion.grid(row = 6, column = 1, sticky = E)
descripcion_entry = Entry(root, bd = 3)
descripcion_entry.grid(row = 6, column = 2)

servicio = Label(root, text = "Servicio", anchor = W)
servicio.grid(row = 7, column = 1, sticky = E)
servicio_entry = Entry(root, bd = 3)
servicio_entry.grid(row = 7, column = 2)

def getValues():
    client = client_entry.get()
    id = id_entry.get()
    vlan = vlan_entry.get()
    ip = ip_mon_entry.get()
    mask = mask_entry.get()
    dg = dg_entry.get()
    description = descripcion_entry.get()
    service = servicio_entry.get()
    templates.burn_sg350(client, id, vlan, ip, mask, dg, description, service)
    
burn = Button(root, text = "Burn", command = getValues)
burn.grid(row = 10, column = 4)


root.mainloop()