export interface WhatsAppGroup {
  id: string
  name: string
  area: string
}

export interface RealEstateListing {
  id: string
  groupName: string
  content: string
  timestamp: string
  contact: string
  type: 'buy' | 'sell'
  price: number
  bedrooms: number
  bathrooms: number
  area: string
  propertyType: 'apartment' | 'house' | 'condo' | 'townhouse'
  furnishing: 'furnished' | 'unfurnished' | 'partially furnished'
}

export interface Match {
  id: string
  buyerListing: RealEstateListing
  sellerListing: RealEstateListing
  confidence: number
}

