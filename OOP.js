function Contact(name, phone, address) {
    this.name = name,
        this.phone = phone,
        this.address = address,
        this.added = new Date(),
        this.id
}

var Adam = new Contact("Adam", "123455959", {
    street: "Street Rd",
    city: "Orlando",
    state: "FL"
})


function ContactList() {
    this.contacts = []
    this.add = function(contact) {
        contact.id = Math.random() * 100000000000000000
        this.contacts.push(contact)
    }

    this.find(function(name) {
            var finding = []
            if (name == this.contacts[].name) {
                return finding.push(name)
            })
    }
}

var myContactList = new ContactList()

myContactList.add(Adam)
