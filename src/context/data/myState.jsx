import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';

function myState(props) {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)"
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = "white"
        }
    }

    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error("all fields are required")
        }

        setLoading(true)

        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, products)
            toast.success("Add product successfully");
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800);
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        // setProducts("")


    }

    const [product, setProduct] = useState([]);

    const getProductData = async () => {

        setLoading(true)

        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productArray);
                setLoading(false)
            });

            return () => data;
            

        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        getProductData();
    }, []);

      // update product function

      const edithandle = (item) => {
        setProducts(item)
        console.log(item)
    }

    const updateProduct = async () => {
        setLoading(true)
        try {

            await setDoc(doc(fireDB, 'products', products.id), products)
            toast.success("Product Updated successfully")
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800);
            getProductData();
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // delete product

    const deleteProduct = async (item) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', item.id))
            toast.success('Product Deleted successfully')
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "order"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });
            setOrder(ordersArray);
            console.log(ordersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const [user, setUser] = useState([]);

    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUser(usersArray);
            console.log(usersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getOrderData();
        getUserData();
    }, []);

    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')


    

    const [rooms, setRooms] = useState({
        roomId: null,
        password: null,
        maps: null,
        
    });


    const addRoom = async () => {
        if (rooms.roomId == null || rooms.password == null|| rooms.maps== null) {
            return toast.error("Room ID and password are required")
        }

        setLoading(true)

        try {
            const roomRef = collection(fireDB, 'rooms');
            await addDoc(roomRef, rooms)
            toast.success("Room added successfully");
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800);
            getRoomData();
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }


    const [room, setRoom] = useState([]);
    // get room data 
    const getRoomData = async () => {
        setLoading(true)

        try {
            const q = query(
                collection(fireDB, 'rooms')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let roomArray = [];
                QuerySnapshot.forEach((doc) => {
                    roomArray.push({ ...doc.data(), id: doc.id });
                });
                setRoom(roomArray);
                setLoading(false)
            });

            return () => data;

        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        getRoomData();
    }, []);

    // delete room

    const deleteRoom = async (item) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'rooms', item.id))
            toast.success('Room Deleted successfully')
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // Edit the room
    const editRoomHandle = (item) => {
        setRooms(item);
    };
    
    const updateRoom = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, 'rooms', rooms.id), rooms);
            toast.success("Room Updated successfully");
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 600);
            getRoomData();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };



    



    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading,
            products, setProducts, addProduct, product,
            edithandle, updateProduct, deleteProduct, order,
            user, searchkey, setSearchkey,filterType,setFilterType,
            filterPrice,setFilterPrice,rooms, setRooms, addRoom,deleteRoom,editRoomHandle,updateRoom,room
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default myState