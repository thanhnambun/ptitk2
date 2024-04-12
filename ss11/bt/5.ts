// private: Khi một thành viên được khai báo là private, nó chỉ có thể được truy cập bên trong cùng một lớp. Thành viên private không thể được truy cập từ bên ngoài lớp đó, bao gồm cả các lớp con kế thừa từ lớp đó.

// protected: Thành viên được khai báo là protected có thể được truy cập từ bên trong cùng một lớp và từ bên trong các lớp con kế thừa từ lớp đó. Tuy nhiên, nó không thể được truy cập từ bên ngoài lớp hoặc các đối tượng không phải là lớp con.
class userName {
  protected name: string;
  private id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
class Son extends userName {
  constructor(name: string, id: number) {
    super(name,id);
    this.name = name;
    this.id = id;
  }
}
