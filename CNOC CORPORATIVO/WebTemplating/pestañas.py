from tkinter import *
from tkinter import ttk
import templates
import tkinter.messagebox


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


def getValues2():
    client2 = client2_entry.get()
    id2 = id_entry2.get()
    vlan2 = vlan_entry2.get()
    ip2 = ip_mon_entry2.get()
    mask2 = mask_entry2.get()
    dg2 = dg_entry2.get()
    wanip2 = wanip2_entry.get()
    wandg2 = wandg_entry2.get()
    lan_net2 = lan_net2_entry.get()
    lanip2 = lanip2_entry.get()
    landg2 = landg2_entry.get()
    description2 = descripcion_entry2.get()
    service2 = servicio_entry2.get()
    templates.burn_c881(client2, id2, vlan2, ip2, mask2, dg2, wanip2, wandg2, lan_net2, lanip2, landg2, description2, service2)


# tkinter.messagebox.showinfo('Template Master')
# popup_ans = tkinter.messagebox.askquestion('Question 1 ', 'How do you like apples?')
# menuTemplate = Menu(root)
# root.config(menu = menuTemplate)
# subMenu = Menu(menuTemplate)
# menuTemplate.add_cascade(label = "File", menu = subMenu)

root = Tk()

# ******* Tabs *******

notebook = ttk.Notebook(root)
notebook.pack(fill = 'both', expand = 'yes')
tab1 = ttk.Frame(notebook)
tab2 = ttk.Frame(notebook)
notebook.add(tab1, text = 'SG350')
notebook.add(tab2, text = 'C881-K9')

# ******* Dropdown *******

tkvar = StringVar(root)
choices = { 'Pizza','Lasagne','Fries','Fish','Potatoe'}
tkvar.set('Pizza') # set the default option
popupMenu = OptionMenu(tab1, tkvar, *choices)
Label(tab1, text="Choose a dish").grid(row = 0, column = 1)
popupMenu.grid(row = 0, column = 2)



# ******* Entries *******

id = Label(tab1, text = "Client ID")
id.grid( row = 1, column = 1, sticky = E, padx = 5, pady=5)
id_entry = Entry(tab1, bd = 3)
id_entry.grid(row = 1,column = 2, padx = 5, pady=5)

client = Label(tab1, text = "Client Name", anchor = E)
client.grid(row = 2, column = 1, sticky = E, padx = 5, pady=5)
client_entry = Entry(tab1, bd = 3)
client_entry.grid(row = 2, column = 2, padx = 5, pady=5)

vlan = Label(tab1, text = "VLAN")
vlan.grid(row = 3, column = 1, sticky = E, padx = 5, pady=5)
vlan_entry = Entry(tab1, bd = 3)
vlan_entry.grid(row = 3, column = 2, padx = 5, pady=5)

ip_mon = Label(tab1, text = "IP Monitoria")
ip_mon.grid(row = 4, column = 1, sticky = E, padx = 5, pady=5)
ip_mon_entry = Entry(tab1, bd = 3)
ip_mon_entry.grid(row = 4, column = 2, padx = 5, pady=5)
mask = Label(tab1, text = "Mask")
mask.grid(row = 4, column = 3, sticky = E, padx = 5, pady=5)
mask_entry = Entry(tab1, bd = 3)
mask_entry.insert(END, '255.255.255.240')
mask_entry.grid(row = 4, column = 4, padx = 5, pady=5)

dg = Label(tab1, text = "Default Gateway")
dg.grid(row = 5, column = 1, sticky = E, padx = 5, pady=5)
dg_entry = Entry(tab1, bd = 3)
dg_entry.grid(row = 5, column = 2, padx = 5, pady=5)

descripcion = Label(tab1, text = "Description")
descripcion.grid(row = 6, column = 1, sticky = E, padx = 5, pady=5)
descripcion_entry = Entry(tab1, bd = 3)
descripcion_entry.grid(row = 6, column = 2, padx = 5, pady=5)

servicio = Label(tab1, text = "Servicio", anchor = W)
servicio.grid(row = 7, column = 1, sticky = E, padx = 5, pady=5)
servicio_entry = Entry(tab1, bd = 3)
servicio_entry.grid(row = 7, column = 2, padx = 5, pady=5)

burn = Button(tab1, text = "Burn", command = getValues)
burn.grid(row = 10, column = 4, padx = 5, pady=5)

# ******* C881-K9 *******

id2 = Label(tab2, text = "Client ID")
id2.grid( row = 1, column = 1, sticky = E, padx = 5, pady = 5)
id_entry2 = Entry(tab2, bd = 3)
id_entry2.grid(row = 1,column = 2)
client2 = Label(tab2, text = "Client Name")
client2.grid(row = 2, column = 1, sticky = E, padx = 5, pady = 5)
client2_entry = Entry(tab2, bd = 3)
client2_entry.grid(row = 2, column = 2)
vlan2 = Label(tab2, text = "VLAN")
vlan2.grid(row = 3, column = 1, sticky = E, padx = 5, pady = 5)
vlan_entry2 = Entry(tab2, bd = 3)
vlan_entry2.grid(row = 3, column = 2)
ip_mon2 = Label(tab2, text = "IP Monitoria")
ip_mon2.grid(row = 4, column = 1, sticky = E, padx = 5, pady = 5)
ip_mon_entry2 = Entry(tab2, bd = 3)
ip_mon_entry2.grid(row = 4, column = 2)
mask2 = Label(tab2, text = "Mask")
mask2.grid(row = 4, column = 3, sticky = E, padx = 5, pady = 5)
mask_entry2 = Entry(tab2, bd = 3)
mask_entry2.insert(END, '255.255.255.240')
mask_entry2.grid(row = 4, column = 4)
dg2 = Label(tab2, text = "Default Gateway")
dg2.grid(row = 5, column = 1, sticky = E, padx = 5, pady = 5)
dg_entry2 = Entry(tab2, bd = 3)
dg_entry2.grid(row = 5, column = 2)
wanip2 = Label(tab2, text = "WAN IP")
wanip2.grid(row = 6, column = 1, sticky = E, padx = 5, pady = 5)
wanip2_entry = Entry(tab2, bd = 3)
wanip2_entry.grid(row = 6 , column = 2)
wandg2 = Label(tab2, text = "WAN DG").grid(row = 7, column = 1, sticky = E, padx = 5, pady = 5)
wandg_entry2 = Entry(tab2, bd = 3)
wandg_entry2.grid(row = 7, column = 2)
lan_net2 = Label(tab2, text = "LAN NET")
lan_net2.grid(row = 8, column = 1, sticky = E, padx = 5, pady = 5)
lan_net2_entry = Entry(tab2, bd = 3)
lan_net2_entry.grid(row = 8, column = 2)
lanip2 = Label(tab2, text = "LAN IP")
lanip2.grid(row = 9, column = 1, sticky = E, padx = 5, pady = 5)
lanip2_entry = Entry(tab2, bd = 3)
lanip2_entry.grid(row = 9, column = 2)
landg2 = Label(tab2, text = "LAN DG")
landg2.grid(row = 10, column = 1, sticky = E, padx = 5, pady = 5)
landg2_entry = Entry(tab2, bd = 3)
landg2_entry.grid(row = 10, column = 2)
descripcion2 = Label(tab2, text = "Description")
descripcion2.grid(row = 11, column = 1, sticky = E, padx = 5, pady = 5)
descripcion_entry2 =  Entry(tab2, bd = 3)
descripcion_entry2.grid(row = 11, column = 2, padx = 5, pady = 5)
servicio2 = Label(tab2, text = "Servicio")
servicio2.grid(row = 12, column = 1, sticky = E, padx = 5, pady = 5)
servicio_entry2 = Entry(tab2, bd = 3)
servicio_entry2.grid(row = 12, column = 2, padx = 5, pady = 5)

burn2 = Button(tab2, text = "Burn", command = getValues2).grid(row = 10, column = 4)

root.mainloop()