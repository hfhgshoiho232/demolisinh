'use server'

import { fetchRealEstateListings } from '@/lib/mock-data'
import { mockOpenAI } from '@/lib/mock-ai'
import type { Match } from '@/lib/types'

export async function findRealEstateMatches(groups: string[]): Promise<Match[]> {
  try {
    // Fetch listings from selected groups
    const listings = await fetchRealEstateListings(groups)
    
    // Use mock OpenAI to analyze listings and find matches
    const matches = await mockOpenAI.matchBuyersAndSellers(listings)
    
    return matches
  } catch (error) {
    console.error('Error finding matches:', error)
    throw new Error('Failed to find matches')
  }
}

