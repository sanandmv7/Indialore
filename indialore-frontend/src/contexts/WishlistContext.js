import { createContext, useState, useEffect } from "react";

export const addWishlistItem = (wishlistItems, productToAdd) => {
  const existingWishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === productToAdd.id
  );

  if (existingWishlistItem) {
    return wishlistItems.map((wishlistItem) =>
      wishlistItem.id === productToAdd.id
        ? { ...wishlistItem, quantity: wishlistItem.quantity + 1 }
        : wishlistItem
    );
  }

  return [...wishlistItems, { ...productToAdd, quantity: 1 }];
};

const removeWishlistItem = (wishlistItems, wishlistItemToRemove) => {
  // find the wishlist item to remove
  const existingWishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === wishlistItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the wishlist
  if (existingWishlistItem.quantity === 1) {
    return wishlistItems.filter((wishlistItem) => wishlistItem.id !== wishlistItemToRemove.id);
  }

  // return back wishlistitems with matching wishlist item with reduced quantity
  return wishlistItems.map((wishlistItem) =>
    wishlistItem.id === wishlistItemToRemove.id
      ? { ...wishlistItem, quantity: wishlistItem.quantity - 1 }
      : wishlistItem
  );
};

const clearWishlistItem = (wishlistItems, wishlistItemToClear) =>
  wishlistItems.filter((wishlistItem) => wishlistItem.id !== wishlistItemToClear.id);

export const WishlistContext = createContext({
  isWishlistOpen: false,
  setIsOpen: () => {},
  wishlistItems: [],
  addItemToWishlist: () => {},
  removeItemFromWishlist: () => {},
  clearItemFromWishlist: () => {},
  wishlistCount: 0,
  wishlistTotal: 0,
});

export const WishlistProvider = ({ children }) => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistItemCount, setWishlistItemCount] = useState(0);
  const [wishlistTotal, setWishlistTotal] = useState(0);

  useEffect(() => {
    const count = wishlistItems.reduce(
      (total, wishlistItem) => total + wishlistItem.quantity,
      0
    );
    setWishlistItemCount(count);
  }, [wishlistItems]);

  useEffect(() => {
    const newWishlistTotal = wishlistItems.reduce(
      (total, wishlistItem) => total + wishlistItem.quantity * wishlistItem.price,
      0
    );
    setWishlistTotal(newWishlistTotal);
  }, [wishlistItems]);

  const addItemToWishlist = (product) =>
    setWishlistItems(addWishlistItem(wishlistItems, product));

  const removeItemFromWishlist = (wishlistItemToRemove) => {
    setWishlistItems(removeWishlistItem(wishlistItems, wishlistItemToRemove));
  };

  const clearItemFromWishlist = (wishlistItemToClear) => {
    setWishlistItems(clearWishlistItem(wishlistItems, wishlistItemToClear));
  };

  const resetWishlist = ()=>{
    setWishlistItems([]);
  }

  const value = {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlistItems,
    addItemToWishlist,
    removeItemFromWishlist,
    clearItemFromWishlist,
    resetWishlist,
    wishlistItemCount,
    wishlistTotal
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};
