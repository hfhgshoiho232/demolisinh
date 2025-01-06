import type { RealEstateListing, Match } from './types'

function calculateMatchScore(buyer: RealEstateListing, seller: RealEstateListing): number {
  let score = 0

  // Price match (within 5% range)
  if (seller.price <= buyer.price && seller.price >= buyer.price * 0.95) {
    score += 35
  } else if (seller.price <= buyer.price && seller.price >= buyer.price * 0.9) {
    score += 25
  }

  // Bedroom match
  if (seller.bedrooms === buyer.bedrooms) {
    score += 20
  } else if (Math.abs(seller.bedrooms - buyer.bedrooms) === 1) {
    score += 10
  }

  // Bathroom match
  if (seller.bathrooms === buyer.bathrooms) {
    score += 15
  } else if (Math.abs(seller.bathrooms - buyer.bathrooms) === 1) {
    score += 7
  }

  // Area match
  if (seller.area === buyer.area) {
    score += 15
  } else if (seller.area === 'Various' || buyer.area === 'Various') {
    score += 7
  }

  // Property type match
  if (seller.propertyType === buyer.propertyType) {
    score += 10
  }

  // Furnishing match
  if (seller.furnishing === buyer.furnishing) {
    score += 5
  } else if (seller.furnishing === 'partially furnished' || buyer.furnishing === 'partially furnished') {
    score += 2
  }

  return score
}

// Mock OpenAI API client
export const mockOpenAI = {
  async matchBuyersAndSellers(listings: RealEstateListing[]): Promise<Match[]> {
    const buyers = listings.filter(listing => listing.type === 'buy')
    const sellers = listings.filter(listing => listing.type === 'sell')
    const matches: Match[] = []

    for (const buyer of buyers) {
      for (const seller of sellers) {
        const confidence = calculateMatchScore(buyer, seller)
        if (confidence > 60) {  // Increased threshold for better matches
          matches.push({
            id: Math.random().toString(36).substr(2, 9),
            buyerListing: buyer,
            sellerListing: seller,
            confidence
          })
        }
      }
    }

    // Sort matches by confidence score and return top 5
    return matches.sort((a, b) => b.confidence - a.confidence).slice(0, 5)
  }
}

