'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { findRealEstateMatches } from './actions'
import { WHATSAPP_GROUPS } from '@/lib/mock-data'
import type { Match } from '@/lib/types'
import { Loader2 } from 'lucide-react'

export default function RealEstateMatcher() {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([])
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGroupToggle = (groupId: string) => {
    setSelectedGroups(current =>
      current.includes(groupId)
        ? current.filter(id => id !== groupId)
        : [...current, groupId]
    )
  }

  const handleUpdateGroups = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const newMatches = await findRealEstateMatches(selectedGroups)
      setMatches(newMatches)
    } catch (error) {
      setError('Failed to find matches. Please try again.')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 bg-white text-blue-900">
      <h1 className="text-4xl font-bold mb-2 text-blue-600">Real Estate WhatsApp Matcher (Demo Mode)</h1>
      <p className="text-blue-500 mb-8">
        This demo uses simulated WhatsApp groups and a mock AI API to match potential buyers and sellers.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-700">Select Real Estate WhatsApp Groups</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {WHATSAPP_GROUPS.map((group) => (
              <div key={group.id} className="flex items-center space-x-2">
                <Checkbox
                  id={group.id}
                  checked={selectedGroups.includes(group.id)}
                  onCheckedChange={() => handleGroupToggle(group.id)}
                  className="border-blue-400 text-blue-600"
                />
                <label
                  htmlFor={group.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-700"
                >
                  {group.name} ({group.area})
                </label>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleUpdateGroups}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Finding Matches...
              </>
            ) : (
              'Find Matches'
            )}
          </Button>
        </div>

        <Card className="md:col-span-2 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-700">Potential Matches</CardTitle>
          </CardHeader>
          <CardContent>
            {error ? (
              <div className="text-red-500 text-sm">{error}</div>
            ) : matches.length === 0 ? (
              <p className="text-blue-500">No matches found. Try selecting different groups.</p>
            ) : (
              <div className="space-y-4">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="p-4 rounded-lg border border-blue-200 bg-white"
                  >
                    <div className="font-medium text-blue-700 mb-2">Match Score: {match.confidence.toFixed(1)}%</div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-blue-600">Buyer</h3>
                        <p className="text-sm text-blue-800">{match.buyerListing.content}</p>
                        <p className="text-xs text-blue-500 mt-1">
                          Budget: ${match.buyerListing.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-blue-500">
                          Contact: {match.buyerListing.contact}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-600">Seller</h3>
                        <p className="text-sm text-blue-800">{match.sellerListing.content}</p>
                        <p className="text-xs text-blue-500 mt-1">
                          Price: ${match.sellerListing.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-blue-500">
                          Contact: {match.sellerListing.contact}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-blue-600">
                      <span className="font-medium">Property Details: </span>
                      {match.sellerListing.bedrooms} bed, {match.sellerListing.bathrooms} bath, {match.sellerListing.propertyType}, {match.sellerListing.furnishing}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

