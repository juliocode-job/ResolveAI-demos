package main

import "fmt"

type User struct {
	Name string
}

func pointerBug() {
	var u *User = nil
	fmt.Println(u.Name)
}


func rangeBug() {
	items := []string{"item1", "item2", "item3"}
	var pointers []*string

	// Range loop variables
	for _, item := range items {
		pointers = append(pointers, &item)
	}


	for _, p := range pointers {
		fmt.Println(*p)
	}
}


func main() {
	//pointerBug()
	rangeBug()
}
