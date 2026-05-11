print("Digite dois valores diferentes.")

x = int(input("Primeiro valor: "))
y = int(input("Segunda valor: "))

if x > y:
    print(f"O {x} é maior que o {y}.")
elif x < y:
    print(f"O {y} é maior que o {x}.")
else:
    print("Os valores devem ser diferentes.")