import React, { useState, useEffect, useRef } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const PAGE_SIZE = 5;
const requiredFields = ["name", "price", "description", "rating"];

export default function AdminProducts() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    brand: "",
    pieces: "",
    grams: "",
    description: "",
    sellerName: "",
    sellerWhatsapp: "",
    rating: "",
    image: "",
    thumbnails: []
  });

  const [msg, setMsg] = useState("");
  const [uploading, setUploading] = useState(false);

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const imageInputRef = useRef(null);
  const thumbnailsInputRef = useRef(null);

  // Handle input changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Convert single image to Base64
  // Convert single image to Base64 with size limit
const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (file.size > 900 * 1024) { // 900 KB in bytes
    alert("Main image size should not exceed 900 KB");
    e.target.value = ""; // reset file input
    return;
  }

  const reader = new FileReader();
  reader.onloadend = () => {
    setProduct((prev) => ({ ...prev, image: reader.result }));
  };
  reader.readAsDataURL(file);
};

// Convert multiple thumbnails to Base64 with size limit
const handleThumbnailsChange = (e) => {
  const files = Array.from(e.target.files);

  for (let file of files) {
    if (file.size > 900 * 1024) {
      alert(`Thumbnail "${file.name}" exceeds 900 KB and will not be added.`);
      return;
    }
  }

  const promises = files.map(file => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  });

  Promise.all(promises).then((base64Files) => {
    setProduct((prev) => ({ ...prev, thumbnails: base64Files }));
  });
};


  // Submit add/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    for (const field of requiredFields) {
      if (!product[field]) {
        setMsg(`Please fill ${field}`);
        return;
      }
    }

    setUploading(true);

    try {
      const productData = {
        name: product.name,
        price: Number(product.price),
        category: product.category,
        brand: product.brand,
        pieces: product.pieces,
        grams: product.grams,
        description: product.description,
        seller: {
          name: product.sellerName,
          whatsapp: product.sellerWhatsapp,
        },
        rating: parseFloat(product.rating) || 0,
        image: product.image || "",
        thumbnails: product.thumbnails || [],
      };

      if (isEditing && editingId) {
        await updateDoc(doc(db, "products", editingId), productData);
        setMsg("Product updated successfully!");
      } else {
        await addDoc(collection(db, "products"), productData);
        setMsg("Product added successfully!");
      }

      // Reset form
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error(error);
      setMsg("Image size should not exceed 300 KB. Try again.");
    } finally {
      setUploading(false);
    }
  };

  // Fetch products from Firestore
  const fetchProducts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const allProducts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (prod) => {
    setProduct({
      name: prod.name,
      price: prod.price,
      category: prod.category,
      brand: prod.brand,
      pieces: prod.pieces,
      grams: prod.grams,
      description: prod.description,
      sellerName: prod.seller?.name || "",
      sellerWhatsapp: prod.seller?.whatsapp || "",
      rating: prod.rating,
      image: prod.image || "",
      thumbnails: prod.thumbnails || [],
    });
    setIsEditing(true);
    setEditingId(prod.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setMsg("Product deleted successfully!");
    } catch (error) {
      console.error(error);
      setMsg("Failed to delete product.");
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setProduct({
      name: "",
      price: "",
      category: "",
      brand: "",
      pieces: "",
      grams: "",
      description: "",
      sellerName: "",
      sellerWhatsapp: "",
      rating: "",
      image: "",
      thumbnails: []
    });
    if (imageInputRef.current) imageInputRef.current.value = "";
    if (thumbnailsInputRef.current) thumbnailsInputRef.current.value = "";
  };

  const filteredProducts = products.filter((prod) =>
    prod.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Styles
  const inputStyle = {
    padding: "8px",
    borderRadius: 4,
    border: "1px solid #ccc",
    minWidth: 150,
  };

  const textareaStyle = {
    padding: "8px",
    borderRadius: 4,
    border: "1px solid #ccc",
    width: "100%",
    minHeight: 60,
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: 4,
    border: "none",
    cursor: "pointer",
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4CAF50",
    color: "#fff",
    marginTop: 10,
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#2196F3",
    color: "#fff",
    marginRight: 8,
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f44336",
    color: "#fff",
  };

  return (
    <div style={{ maxWidth: 1200, marginLeft: "350px", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>{isEditing ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        <input style={inputStyle} type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
        <input style={inputStyle} type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <input style={inputStyle} type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} />
        <input style={inputStyle} type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleChange} />
        <input style={inputStyle} type="number" name="pieces" placeholder="Pieces" value={product.pieces} onChange={handleChange} />
        <input style={inputStyle} type="number" name="grams" placeholder="Grams" value={product.grams} onChange={handleChange} />
        <textarea style={textareaStyle} name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
        <input style={inputStyle} type="text" name="sellerName" placeholder="Seller Name" value={product.sellerName} onChange={handleChange} />
        <input style={inputStyle} type="text" name="sellerWhatsapp" placeholder="Seller WhatsApp" value={product.sellerWhatsapp} onChange={handleChange} />
        <input style={inputStyle} type="number" name="rating" placeholder="Rating (0-5)" value={product.rating} onChange={handleChange} min="0" max="5" step="0.1" required />

        <div>
          <label>Main Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} ref={imageInputRef} />
          {product.image && <img src={product.image} alt="Main" style={{ width: 80, marginTop: 5 }} />}
        </div>

        <div>
          <label>Thumbnails:</label>
          <input type="file" accept="image/*" multiple onChange={handleThumbnailsChange} ref={thumbnailsInputRef} />
          <div style={{ display: "flex", gap: 5, marginTop: 5 }}>
            {product.thumbnails.map((thumb, i) => (
              <img key={i} src={thumb} alt={`thumb-${i}`} style={{ width: 50, height: 50, objectFit: "cover" }} />
            ))}
          </div>
        </div>

        <button type="submit" disabled={uploading} style={submitButtonStyle}>
          {uploading ? "Saving..." : isEditing ? "Update Product" : "Add Product"}
        </button>
      </form>

      {msg && <p style={{ marginTop: 10, color: "green" }}>{msg}</p>}

      <h3 style={{ marginTop: 40 }}>Products</h3>
      <input
        style={{ ...inputStyle, marginBottom: 10 }}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10 }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Description</th>
            <th>Pieces</th>
            <th>Grams</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length === 0 ? (
            <tr><td colSpan="10">No products found.</td></tr>
          ) : (
            filteredProducts.map((prod) => (
              <tr key={prod.id}>
                <td>
                  {prod.image && <img src={prod.image} alt={prod.name} style={{ width: 50 }} />}
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {prod.thumbnails?.map((thumb, i) => <img key={i} src={thumb} alt={`thumb-${i}`} style={{ width: 30, height: 30 }} />)}
                  </div>
                </td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.category}</td>
                <td>{prod.brand}</td>
                <td>{prod.description}</td>
                <td>{prod.pieces}</td>
                <td>{prod.grams}</td>
                <td>{prod.rating}</td>
                <td>
                  <button onClick={() => handleEdit(prod)} style={editButtonStyle}>Edit</button>
                  <button onClick={() => handleDelete(prod.id)} style={deleteButtonStyle}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
