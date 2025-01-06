import type { WhatsAppGroup, RealEstateListing } from './types'

export const WHATSAPP_GROUPS: WhatsAppGroup[] = [
  { id: '1', name: 'Downtown Apartments', area: 'Downtown' },
  { id: '2', name: 'Suburban Family Homes', area: 'Suburbs' },
  { id: '3', name: 'Luxury Real Estate', area: 'Various' },
  { id: '4', name: 'First-Time Homebuyers', area: 'Various' },
  { id: '5', name: 'Investment Properties', area: 'Various' },
]

const MOCK_LISTINGS: Record<string, RealEstateListing[]> = {
  '1': [
    {
      id: '1a',
      groupName: 'Downtown Apartments',
      content: 'Looking to buy a modern 2BHK apartment in downtown, budget $350k-$400k, preferably with a gym',
      timestamp: new Date().toISOString(),
      contact: '+1234567890',
      type: 'buy',
      price: 400000,
      bedrooms: 2,
      bathrooms: 2,
      area: 'Downtown',
      propertyType: 'apartment',
      furnishing: 'unfurnished'
    },
    {
      id: '1b',
      groupName: 'Downtown Apartments',
      content: 'Selling spacious 2BHK apartment, downtown area, asking $380k, building has a gym and great city views!',
      timestamp: new Date().toISOString(),
      contact: '+1987654321',
      type: 'sell',
      price: 380000,
      bedrooms: 2,
      bathrooms: 2,
      area: 'Downtown',
      propertyType: 'apartment',
      furnishing: 'partially furnished'
    },
    {
      id: '1c',
      groupName: 'Downtown Apartments',
      content: 'Seeking a cozy 1BHK apartment in downtown, max budget $300k, must be close to public transport',
      timestamp: new Date().toISOString(),
      contact: '+1122334455',
      type: 'buy',
      price: 300000,
      bedrooms: 1,
      bathrooms: 1,
      area: 'Downtown',
      propertyType: 'apartment',
      furnishing: 'furnished'
    },
    {
      id: '1d',
      groupName: 'Downtown Apartments',
      content: 'For sale: Charming 1BHK apartment, 5 min walk to metro station, fully renovated, asking $290k',
      timestamp: new Date().toISOString(),
      contact: '+2233445566',
      type: 'sell',
      price: 290000,
      bedrooms: 1,
      bathrooms: 1,
      area: 'Downtown',
      propertyType: 'apartment',
      furnishing: 'unfurnished'
    }
  ],
  '2': [
    {
      id: '2a',
      groupName: 'Suburban Family Homes',
      content: 'Looking for a 4BHK house in quiet suburb, good schools nearby, budget up to $600k',
      timestamp: new Date().toISOString(),
      contact: '+3344556677',
      type: 'buy',
      price: 600000,
      bedrooms: 4,
      bathrooms: 3,
      area: 'Suburbs',
      propertyType: 'house',
      furnishing: 'unfurnished'
    },
    {
      id: '2b',
      groupName: 'Suburban Family Homes',
      content: 'Selling: Spacious 4BHK family home, top-rated school district, large backyard, asking $580k',
      timestamp: new Date().toISOString(),
      contact: '+4455667788',
      type: 'sell',
      price: 580000,
      bedrooms: 4,
      bathrooms: 3,
      area: 'Suburbs',
      propertyType: 'house',
      furnishing: 'partially furnished'
    },
    {
      id: '2c',
      groupName: 'Suburban Family Homes',
      content: 'Wanted: 3BHK house with a garden, budget $450k-$500k, prefer good community',
      timestamp: new Date().toISOString(),
      contact: '+5566778899',
      type: 'buy',
      price: 500000,
      bedrooms: 3,
      bathrooms: 2,
      area: 'Suburbs',
      propertyType: 'house',
      furnishing: 'unfurnished'
    },
    {
      id: '2d',
      groupName: 'Suburban Family Homes',
      content: 'For sale: Lovely 3BHK house with beautiful garden, friendly neighborhood, asking $470k',
      timestamp: new Date().toISOString(),
      contact: '+6677889900',
      type: 'sell',
      price: 470000,
      bedrooms: 3,
      bathrooms: 2,
      area: 'Suburbs',
      propertyType: 'house',
      furnishing: 'unfurnished'
    }
  ],
  '3': [
    {
      id: '3a',
      groupName: 'Luxury Real Estate',
      content: 'Seeking luxury 5BHK penthouse, panoramic city view, budget: $2M-$2.5M, must have private elevator',
      timestamp: new Date().toISOString(),
      contact: '+7788990011',
      type: 'buy',
      price: 2500000,
      bedrooms: 5,
      bathrooms: 5,
      area: 'Downtown',
      propertyType: 'apartment',
      furnishing: 'furnished'
    },
    {
      id: '3b',
      groupName: 'Luxury Real Estate',
      content: 'Selling: Exclusive 5BHK penthouse, breathtaking city views, private elevator, price: $2.4M',
      timestamp: new Date().toISOString(),
      contact: '+8899001122',
      type: 'sell',
      price: 2400000,
      bedrooms: 5,
      bathrooms: 5,
      area: 'Downtown',
      propertyType: 'apartment',
      furnishing: 'furnished'
    },
    {
      id: '3c',
      groupName: 'Luxury Real Estate',
      content: 'Looking for a luxury beachfront villa, 4-5 bedrooms, budget up to $3M, must have pool',
      timestamp: new Date().toISOString(),
      contact: '+9900112233',
      type: 'buy',
      price: 3000000,
      bedrooms: 5,
      bathrooms: 4,
      area: 'Coastal',
      propertyType: 'house',
      furnishing: 'unfurnished'
    },
    {
      id: '3d',
      groupName: 'Luxury Real Estate',
      content: 'For sale: Stunning 5BHK beachfront villa with infinity pool, private beach access, asking $2.9M',
      timestamp: new Date().toISOString(),
      contact: '+1100223344',
      type: 'sell',
      price: 2900000,
      bedrooms: 5,
      bathrooms: 4,
      area: 'Coastal',
      propertyType: 'house',
      furnishing: 'partially furnished'
    }
  ],
  '4': [
    {
      id: '4a',
      groupName: 'First-Time Homebuyers',
      content: 'First-time buyer looking for a cozy 2BHK apartment or townhouse, max budget $300k',
      timestamp: new Date().toISOString(),
      contact: '+2200334455',
      type: 'buy',
      price: 300000,
      bedrooms: 2,
      bathrooms: 2,
      area: 'Suburbs',
      propertyType: 'apartment',
      furnishing: 'unfurnished'
    },
    {
      id: '4b',
      groupName: 'First-Time Homebuyers',
      content: 'Selling: Perfect starter home, 2BHK townhouse, newly renovated, asking $290k, great for first-time buyers',
      timestamp: new Date().toISOString(),
      contact: '+3300445566',
      type: 'sell',
      price: 290000,
      bedrooms: 2,
      bathrooms: 2,
      area: 'Suburbs',
      propertyType: 'townhouse',
      furnishing: 'partially furnished'
    },
    {
      id: '4c',
      groupName: 'First-Time Homebuyers',
      content: 'Seeking a small 1BHK condo, preferably near downtown, budget up to $250k',
      timestamp: new Date().toISOString(),
      contact: '+4400556677',
      type: 'buy',
      price: 250000,
      bedrooms: 1,
      bathrooms: 1,
      area: 'Downtown',
      propertyType: 'condo',
      furnishing: 'unfurnished'
    },
    {
      id: '4d',
      groupName: 'First-Time Homebuyers',
      content: 'For sale: Cozy 1BHK condo, walking distance to downtown, modern amenities, asking $240k',
      timestamp: new Date().toISOString(),
      contact: '+5500667788',
      type: 'sell',
      price: 240000,
      bedrooms: 1,
      bathrooms: 1,
      area: 'Downtown',
      propertyType: 'condo',
      furnishing: 'unfurnished'
    }
  ],
  '5': [
    {
      id: '5a',
      groupName: 'Investment Properties',
      content: 'Looking for multi-family property for investment, 4-6 units, budget up to $1.2M',
      timestamp: new Date().toISOString(),
      contact: '+6600778899',
      type: 'buy',
      price: 1200000,
      bedrooms: 6,
      bathrooms: 4,
      area: 'Various',
      propertyType: 'multi-family',
      furnishing: 'unfurnished'
    },
    {
      id: '5b',
      groupName: 'Investment Properties',
      content: 'Selling: 5-unit apartment building, fully occupied, great ROI, asking $1.15M',
      timestamp: new Date().toISOString(),
      contact: '+7700889900',
      type: 'sell',
      price: 1150000,
      bedrooms: 5,
      bathrooms: 5,
      area: 'Suburbs',
      propertyType: 'multi-family',
      furnishing: 'partially furnished'
    },
    {
      id: '5c',
      groupName: 'Investment Properties',
      content: 'Seeking commercial property for retail, 2000-3000 sq ft, budget up to $800k',
      timestamp: new Date().toISOString(),
      contact: '+8800990011',
      type: 'buy',
      price: 800000,
      bedrooms: 0,
      bathrooms: 2,
      area: 'Downtown',
      propertyType: 'commercial',
      furnishing: 'unfurnished'
    },
    {
      id: '5d',
      groupName: 'Investment Properties',
      content: 'For sale: Prime retail space, 2500 sq ft, high foot traffic area, asking $780k',
      timestamp: new Date().toISOString(),
      contact: '+9900001122',
      type: 'sell',
      price: 780000,
      bedrooms: 0,
      bathrooms: 2,
      area: 'Downtown',
      propertyType: 'commercial',
      furnishing: 'unfurnished'
    }
  ]
}

export async function fetchRealEstateListings(groupIds: string[]): Promise<RealEstateListing[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return groupIds.flatMap(id => MOCK_LISTINGS[id] || [])
}

